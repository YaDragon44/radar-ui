"""Update only confirmed FX quote fields from official CBR daily XML.

Technical/fundamental commentary is not recalculated here.
"""
from __future__ import annotations
from datetime import datetime, timezone
from pathlib import Path
import re
from urllib.request import Request, urlopen
from xml.etree import ElementTree as ET

URL = "https://www.cbr.ru/scripts/XML_daily.asp?date_req=" + datetime.now(timezone.utc).strftime("%d/%m/%Y")
FILE = Path("ruble-data.js")

def quote(root, code):
    for node in root.findall("Valute"):
        if node.findtext("CharCode") == code:
            nominal = int(node.findtext("Nominal"))
            value = float(node.findtext("Value").replace(",", "."))
            return value / nominal
    raise ValueError("CBR_MISSING_" + code)

def update(text, xml, now=None):
    root = ET.fromstring(xml)
    date = datetime.strptime(root.attrib["Date"], "%d.%m.%Y").date()
    now = now or datetime.now(timezone.utc).date()
    print(f"CBR_SOURCE_DATE={date.isoformat()} EXPECTED_DATE={now.isoformat()}", flush=True)
    if (now - date).days < 0 or (now - date).days > 5:
        raise ValueError("CBR_SOURCE_DATE_OUT_OF_RANGE")
    usd, cny = quote(root, "USD"), quote(root, "CNY")
    stamp = date.strftime("%d.%m.%Y")
    iso = date.isoformat() + "T00:00:00+03:00"
    def sub(pattern, replacement, source):
        result, count = re.subn(pattern, lambda _: replacement, source, count=1)
        if count != 1:
            raise ValueError("FX_PROJECTION_SHAPE_CHANGED")
        return result
    text = sub(r'as_of: "[^"]+"', f'as_of: "{iso}"', text)
    text = sub(r'headline: \{rate:"[^"]+", change_1d:"[^"]+", ruble_direction:"[^"]+", direction_symbol:"[^"]+", basis:"[^"]+", source_date:"[^"]+"\}',
               f'headline: {{rate:"{usd:.4f} ₽", change_1d:"N/A", ruble_direction:"НЕТ ПОДТВЕРЖДЁННОГО ТРЕНДА", direction_symbol:"→", basis:"Официальный курс ЦБ РФ, без внутридневной динамики", source_date:"{stamp}"}}', text)
    for code, value in (("USD/RUB", usd), ("CNY/RUB", cny)):
        pattern = r'(\{name:"' + code + r'",value:)"[^"]+"(,detail:)"[^"]+"(,direction:)"[^"]+"(,effect:)"[^"]+"(,tone:)"[^"]+"(,source_date:)"[^"]+"\}'
        text = sub(pattern, f'{{name:"{code}",value:"{value:.4f} ₽",detail:"Официальный курс ЦБ РФ; динамика не рассчитана",direction:"→",effect:"тренд не подтверждён",tone:"yellow",source_date:"{stamp}"}}', text)
    # Never present old analysis as if it was refreshed with today's FX quotes.
    text = sub(r'analysis_as_of:"[^"]+"', 'analysis_as_of:"01.10.2026 · 12:00 МСК (архивный анализ)"', text)
    return text

def main():
    req = Request(URL, headers={"User-Agent": "RADAR-FX-Source/1.0"})
    with urlopen(req, timeout=25) as response:
        xml = response.read()
    original = FILE.read_text(encoding="utf-8")
    revised = update(original, xml)
    FILE.write_text(revised, encoding="utf-8")
    print("CBR_FX_CONFIRMED")

if __name__ == "__main__":
    main()

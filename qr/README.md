# QR codes

Generates one QR PNG per dish, each pointing to `https://orale-authentic-mexican-flavor.github.io/dish.html?id=<dish-id>`.

## Usage

```
pip install qrcode[pil]
python generate_qr.py
```

Dish ids are read directly from `../dishes-data.js`, so the codes always match whatever dishes are currently in the menu — no list to keep in sync by hand. Re-run the script any time dishes are added, removed, or renamed, and commit the updated PNGs.

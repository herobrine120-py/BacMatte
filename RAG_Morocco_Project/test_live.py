import urllib.request
import json
import ssl

url = "https://bacmatte.onrender.com/chat"
data = json.dumps({
    "question": "اشرح لي الدرس",
    "lesson": "Fonctions exponentielles - الدوال الأسية",
    "subject": "Mathématiques",
    "level": "2BAC",
    "mode": "explain"
}).encode('utf-8')

req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/json", "Origin": "https://bacmatte.vercel.app"})

try:
    with urllib.request.urlopen(req, context=ssl._create_unverified_context()) as response:
        for chunk in response:
            print(chunk.decode('utf-8'), end='')
except Exception as e:
    print("Error:", e)

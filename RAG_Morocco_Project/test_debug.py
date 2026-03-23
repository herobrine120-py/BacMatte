import urllib.request
import urllib.parse
import json
import time
import ssl

url = "https://bacmatte.onrender.com/debug_rag?q=" + urllib.parse.quote("Fonctions exponentielles - الدوال الأسية")

print(f"Waiting for deployment at {url}...")
for _ in range(60):
    try:
        ctx = ssl._create_unverified_context()
        req = urllib.request.Request(url, headers={"Origin": "https://bacmatte.vercel.app"})
        with urllib.request.urlopen(req, context=ctx) as response:
            if response.status == 200:
                data = json.loads(response.read().decode('utf-8'))
                if "docs" in data:
                    print("\n--- DEPLOYMENT SUCCESSFUL ---")
                    for i, d in enumerate(data["docs"]):
                        print(f"CHUNK {i+1}:")
                        print(d[:300].replace('\n', ' '))
                        print("...")
                    break
    except urllib.error.HTTPError as e:
        if e.code == 404:
            print(".", end="", flush=True)
            time.sleep(5)
        else:
            print(f"HTTP Error: {e.code}")
            time.sleep(5)
    except Exception as e:
        print(f"Error: {e}")
        time.sleep(5)
else:
    print("Timeout waiting for deployment.")

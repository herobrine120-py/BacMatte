import urllib.request
import json
import ssl

URL = "https://bacmatte.onrender.com/chat"
payload = json.dumps({
    "question": "اشرح قوانين نيوتن وهل تنطبق في الفضاء؟",
    "lesson": "قوانين نيوتن",
    "subject": "الفيزياء الكيمياء",
    "level": "2 BAC",
    "mode": "explain"
}).encode('utf-8')

headers = {
    "Content-Type": "application/json",
    "Origin": "https://bacmatte.vercel.app"
}

req = urllib.request.Request(URL, data=payload, headers=headers)
context = ssl._create_unverified_context()

print("====== INITIATING AI RAG CHAT TEST ======")
print("Sending request to Render Backend...")

try:
    with urllib.request.urlopen(req, context=context) as response:
        print("Connected! Streaming Response:\n")
        for line in response:
            decoded = line.decode('utf-8').strip()
            if decoded.startswith("data: "):
                data_str = decoded[6:]
                if data_str == "[DONE]":
                    break
                try:
                    j = json.loads(data_str)
                    if "token" in j:
                        print(j["token"], end="", flush=True)
                except:
                    pass
    print("\n\n====== TEST COMPLETED SUCCESSFULLY ======")
except Exception as e:
    print(f"Error: {e}")

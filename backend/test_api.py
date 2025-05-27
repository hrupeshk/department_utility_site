import requests
import json

def test_api():
    try:
        response = requests.get("http://127.0.0.1:8000/api/profiles")
        if response.status_code == 200:
            profiles = response.json()
            print(f"Successfully retrieved {len(profiles)} profiles:")
            print(json.dumps(profiles, indent=2))
        else:
            print(f"Error: Status code {response.status_code}")
            print(response.text)
    except Exception as e:
        print(f"Error making request: {e}")

if __name__ == "__main__":
    test_api()
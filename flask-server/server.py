from flask import Flask, request, jsonify
from flask_cors import CORS
from webscraper import *

app = Flask(__name__)
CORS(app)

# Members API Route
@app.route("/members")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}

# New Route to Handle User Input
@app.route("/submit", methods=["POST"])
def submit():
    data = request.get_json()  # Parse JSON data from the request
    job_input = data["job_value"]  # Access the 'job_value' key from JSON
    location_input = data["location_value"]

    url = getURL(job_input, location_input)

    job_titles, companies = scrapePage(url)

    print(f"Received from frontend: {data}")  # Debugging: Log data to console
    return jsonify({
        "received": url,
    })  # Send back a response

if __name__ == "__main__":
    app.run(debug=True)

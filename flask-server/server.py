from flask import Flask, request, jsonify
from flask_cors import CORS
from webscraper import *

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# New Route to Handle User Input
@app.route("/submit", methods=["POST"])
def submit():
    data = request.get_json()  # Parse JSON data from the request
    job_input = data["job_value"]  # Access the 'job_value' key from JSON
    location_input = data["location_value"]

    url = getURL(job_input, location_input)

    job_titles, companies, urls = scrapePage(url)

    print(f"Received from frontend: {len(job_titles)}")  # Debugging: Log data to console
    return jsonify({
        "received": url,
        "jobs_and_companies": [{"job_title": job, "company": company, 'url': url} for job, company, url in zip(job_titles, companies, urls)]
    })  # Send back a response

@app.route("/test")
def test():
    return "CORS is working!"

if __name__ == "__main__":
    app.run(debug=True)

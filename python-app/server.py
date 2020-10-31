#!/usr/bin/env python
# coding=utf-8
from flask import Flask
from flask import request

app = Flask(__name__)

@app.route("/<path:dummy>")
def index(dummy):
    return request.url

app.run()

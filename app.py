from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension
from vacation import plan

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret'

debug = DebugToolbarExtension(app)

@app.route('/')
def index():

    prompts = plan.prompts

    return render_template('form.html',prompts = prompts)

@app.route('/vacation')
def vacation():

    text = plan.generate(request.args)

    return render_template('post.html',text = text)
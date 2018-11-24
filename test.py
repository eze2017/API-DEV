from flask import Flask,jsonify

app = Flask(__name__)

@app.route('/hello')
def hello_world():
    return "hello World"

@app.route('/hi')
def hi_there():
    
    jsy ={
        'field1' :'yello',
        'field2':'bloue'
    }
    return jsonify(jsy)
if __name__ == "__main__":
    app.run(debug=True)

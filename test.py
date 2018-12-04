from flask import Flask,jsonify,request

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


@app.route('/add',methods=['POST'])
def addTwoNumbers():
    dataDict = request.get_json()
    if 'x' and 'y' not in dataDict:
        return "ERROR" ,305
    x = dataDict['x']
    y = dataDict['y']
    z = x + y

    ret_json = {'z':z}

    return jsonify(ret_json),200

if __name__ == "__main__":
    app.run(debug=True)

from flask import Flask, request, render_template

#flask constructor
app = Flask(__name__)

#root endpoint
@app.route('/', methods=['GET']) 
def index(): 
    ## Display the HTML form template  
    return render_template('signup.html') 

# `read-form` endpoint
@app.route('/read-form', methods=['POST']) 
def read_form(): 
  
    # Get the form data as Python ImmutableDict datatype  
    data = request.form 
  
    ## Return the extracted information  
    return { 
        'emailId'     : data['email'], 
        'phoneNumber' : data['phoneNumber'], 
        'password'    : data['password'], 
        'firstName' : data['firstName'],
        'lastName': data['lastName'],
        'confirmPassword': data['confirmPassword'],
        'T&C':data['terms'],

    } 

def index():
    return render_template('signup.html')

@app.route('/setup')
def setup():
    return render_template('setup.html')
# Main Driver Function 
if __name__ == '__main__': 
    # Run the application on the local development server 
    app.run()
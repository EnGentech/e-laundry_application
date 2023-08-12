from flask import Flask, render_template, url_for, redirect, request, flash, session
from flask_bcrypt import Bcrypt
import secrets
from functools import wraps

app = Flask(__name__)
secret_key = secrets.token_hex(16)
app.config['SECRET_KEY'] = secret_key


@app.route('/home', methods=['GET', 'POST'])
def home():
    """This defines the home page"""
    from db_storage import Storage
    if request.method == "GET":
        return render_template("index.html")
    elif request.method == "POST":
        userName = request.form.get('userName')
        password = request.form.get('password')
        validate = Storage.security_check(userName, password)  
        if validate == 'allow_access':
            session['userName'] = userName
            return redirect(url_for('main'))
        else:
            return render_template('index.html', invalid='Credentials not found')


@app.route("/")
def redirect_me():
    """this function redirects users to home page"""
    return redirect(url_for('home'))


@app.route('/home/signup')
def signup():
    """Sign up page created"""
    return render_template('signup.html')


@app.route('/signup', methods=["POST"])
def sign_up():
    from db_storage import Storage
    """This function returns a sign_up"""
    name = request.form.get('name')
    password = request.form.get('password')
    email = request.form.get('email')
    address = request.form.get('address')
    phoneNumber = request.form.get('phoneNumber')
    encrypt = Bcrypt().generate_password_hash(password).decode('utf-8')
    value = [name, encrypt, email, address, phoneNumber]
    validate = Storage.validate_user(name)
    if validate == 'found':
        return render_template('signup.html', error='User already registered, please use the sign in option')
    else:
        Storage.create_user(value)
        flash("Sign up was successful, please login")
        return redirect(url_for('home'))

def login_required(func):
    @wraps(func)
    def decorated_function(*args, **kwargs):
        if 'userName' not in session:
            return redirect(url_for('redirect_me'))
        return func(*args, **kwargs)
    return decorated_function

@app.route('/home/e_laundry_main', methods=['GET', 'POST'])
@login_required
def main():
    """A function to render the main page"""
    return render_template('main_page.html')

@app.route('/home/e_laundry_main/e_payment')
@login_required
def e_payment():
    """Render e_payment service"""
    return render_template('service_in_progress.html')


if __name__ == "__main__":
    app.run(debug=True)
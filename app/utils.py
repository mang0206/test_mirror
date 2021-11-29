import re

def valid_email(email):
    regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
    p = re.compile(regex)
    return p.fullmatch(email)

def valid_password(password):
    regex = r"[^a-zA-Z0-9]"
    p = re.compile(regex)

    return p.search(password)

if __name__ == '__main__':
    print(valid_email(
        'ahaampo5@gmail.com@#$!@#$'
    ))

    print(valid_password('12341234'))
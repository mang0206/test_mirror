import re

def valid_email(email):
    regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
    p = re.compile(regex)
    if p.fullmatch(email):
        return True
    else:
        return False

def valid_password(password):
    regex = r"[^a-zA-Z0-9]"
    p = re.compile(regex)

    if p.search(password):
        return True
    else:
        return False

if __name__ == '__main__':
    print(valid_email(
        'ahaampo5@gmail.com@#$!@#$'
    ))

    print(valid_password('12341234'))



def write_registration_email(validation_code):
    return ("""Dear Syntheticus User
Please validate your registration with the following validation code:
%s

Thank you.
Your Syntheticus team""" % validation_code)


def write_password_reset_email(validation_code):
    return ("""Dear Syntheticus User

Please use the following validation code to reset your password:
%s

If you did not request a password change you can safely ignore this e-mail.

Thank you.
Your Syntheticus team""" % validation_code)

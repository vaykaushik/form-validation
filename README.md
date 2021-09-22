# form-validation-draft

Form validation with multiple layers

The following validation has been applied:

1) Adding relevant class names for both 'success' and 'error' instances depending upon whether they have passed or not and changing field colors as well as adding an error message.
2) Checking if fields are empty.
3) Checking whether email is a proper email address with an @emailprovider.com and not random characters.
4) Checking whether password fields match in value.
5) Checking whether the fields of 'username' is between 5 to 15 characters in length and whether 'password' is between 8 to 15 characters in length.

In total, there are four layers of validation and a function to capitalise the id names of the fields individually all invoked within the event listener when the user clicks, 'submit'.


# Postmark

The Postmark module allows sending email via Postmark's REST API over HTTPS,
as an alternative to the standard SMTP library. An account with Postmark is
required to use this module:

https://postmarkapp.com/

For a full description of the module, visit the
[project page](https://www.drupal.org/project/postmark).

Submit bug reports and feature suggestions, or track changes in the
[issue queue](https://www.drupal.org/project/issues/postmark).


## Table of contents

- Requirements
- Installation
- Configuration
- Maintainers


## Requirements

This module requires no modules outside of Drupal core.


## Installation

Install as you would normally install a contributed Drupal module. For further
information, see
[Installing Drupal Modules](https://www.drupal.org/docs/extending-drupal/installing-drupal-modules).


## Configuration

1. Configure the Mail System (`admin/config/system/mailsystem`) Formatter and
   Sender so that all modules use Postmark to send email. Alternatively, you
   can configure it so some modules use other mail modules or the default
   Drupal mail handler if you'd like. For example, if you don't like the way
   the Contact module is handled, you can set things up so Contact module
   emails are sent by the regular Drupal mail handler.
1. Go to Configuration > Postmark (`admin/config/mail/postmark`).
1. Enable Postmark functionality and add your API key from your Postmark account.
   You can get an API key from https://postmarkapp.com/
1. The test functionality enables you to test the integration is working, this 
   will use a credit by default each time you submit an email address.
1. The email address that emails are sent from on your site must have a valid 
   Sender Signature set up in your Postmark account. Different modules use 
   different settings for the "From" address. One important place to check is 
   the address on Configuration > Site information.
1. Emails sent by the core Contact module use the sender email as the Reply To
   address, and will append the sender's email address to the bottom of the email
   so the recipient can see who submitted the Contact form. This is necessary
   when using Postmark, as all emails must be sent from a sender defined by a
   Sender Signature. The "From" email address is the address defined by the
   setting on Configuration > Site information.


## Maintainers

- John Oltman - [john.oltman](https://www.drupal.org/u/johnoltman)
- Ivan Trokhanenko - [i-trokhanenko](https://www.drupal.org/u/i-trokhanenko)
- Luke Simmons - [luketsimmons](https://www.drupal.org/u/luketsimmons)
- Alli Price - [heylookalive](https://www.drupal.org/u/heylookalive)

The Drupal 7 and 8 versions of Postmark were developed by
John Oltman (john.oltman) from SiteBasin.com.

The Postmark module was developed by Luke Simmons and 
Allister Price (alli.price) from deeson.co.uk.

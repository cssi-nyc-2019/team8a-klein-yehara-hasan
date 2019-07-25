# the import section
import webapp2
import jinja2
import os

# this initializes the jinja2 environment
# this will be the same in every app that uses the jinja2 templating library 
the_jinja_env = jinja2.Environment(
  loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
  extensions=['jinja2.ext.autoescape'],
  autoescape=True)

# other functions should go above the handlers or in a separate file

# the handler section



class MainHandler(webapp2.RequestHandler):
  def get(self):
  	mainPage = the_jinja_env.get_template('mainPage.html')
  	self.response.write(mainPage.render())
  	self.response.write('Hello, coders')  # the response


class QuizHandler(webapp2.RequestHandler):
  def get(self):
  	quiz = the_jinja_env.get_template('index.html')
  	self.response.write(quiz.render())


class FoodHandler(webapp2.RequestHandler):
  def get(self):
  	fastfood = the_jinja_env.get_template('fastfood.html')
  	self.response.write(fastfood.render())


class RetailHandler(webapp2.RequestHandler):
  def get(self):
  	retail = the_jinja_env.get_template('retail.html')
  	self.response.write(retail.render())



class ServiceHandler(webapp2.RequestHandler):
  def get(self):
  	service = the_jinja_env.get_template('service.html')
  	self.response.write(service.render())



class StemHandler(webapp2.RequestHandler):
  def get(self):
  	stem = the_jinja_env.get_template('stem.html')
  	self.response.write(stem.render())



class InternshipsHandler(webapp2.RequestHandler):
  def get(self):
  	internships = the_jinja_env.get_template('internships.html')
  	self.response.write(internships.render())

class MapsHandler(webapp2.RequestHandler):
  def get(self):
  	maps = the_jinja_env.get_template('map.html')
  	self.response.write(maps.render())





# the app configuration section	
app = webapp2.WSGIApplication([
  #('/', MainPage),
  ('/', MainHandler),
  ('/quiz', QuizHandler),
  ('/food', FoodHandler),
  ('/retail', RetailHandler),
  ('/service', ServiceHandler),
  ('/stem', StemHandler),
  ('/intern', InternshipsHandler),
  ('/map', MapsHandler),
  ], debug=True)













































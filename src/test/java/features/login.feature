Feature: As a user I want a login page so that only authentic 
	users will be able to login
	
	
#	Scenario Outline: Valid users should be able to login 
#	Given I am on TechFios site 
#	When I enter <"username"> and <"password"> 
#	And I click on signin button 
#	Then Dashboard page should display 
#	
         
Scenario Outline: Valid users should be able to login 
	Given I am on TechFios site 
	When I enter "<username>" and "<password>" 
	And I click on signin button 
	Then Dashboard page should display 
	
	Examples: 
		|username|password|
		|demo@techfios.com|abc123|
		
		
		
		
		
		

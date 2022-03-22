package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.DashBoardPage;
import page.LoginPage;
import util.Assertion;
import util.BasePage;
import util.BrowserFactory;

public class LoginSteps extends BasePage {

	WebDriver driver;
	LoginPage login;
	DashBoardPage dashboard;

	@Before
	public void beforeRun() {
		driver = BrowserFactory.LaunchBrowser();
		login = PageFactory.initElements(driver, LoginPage.class);
		dashboard = PageFactory.initElements(driver, DashBoardPage.class);
	}

	@Given("^I am on TechFios site$")
	public void i_am_on_TechFios_site() throws Throwable {
	}

	@When("^I enter username and password$")
	public void i_enter_username_and_password() throws Throwable {
		login = PageFactory.initElements(driver, LoginPage.class);
		login.enterUserName("demo@techfios.com");
		login.enterPassword("abc123");
	}

	@When("^I enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_enter_and(String username, String password) throws Throwable {
		login.enterUserName(username);
		login.enterPassword(password);
}

	@When("^I click on signin button$")
	public void i_click_on_signin_button() throws Throwable {
		login.clickLoginButton();
	}

	@Then("^Dashboard page should display$")
	public void dashboard_page_should_display() throws Throwable {
		String expected = "Dashboard- iBilling";
		Assertion.equals("Wrong Page Displayed", dashboard.getPageTitle(), expected);
		screenShot(driver, "D:\\SelenuimProjects/test.jpg");

	}

}

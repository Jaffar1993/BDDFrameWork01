package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class DashBoardPage {

	WebDriver driver;

	public DashBoardPage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//span[contains(text(),'Dashboard')]")
	WebElement DASHBOARD_FIELD_LOCATOR;

	public void verifyDashboard() {
		DASHBOARD_FIELD_LOCATOR.click();
	}

	public String getPageTitle() {
		return driver.getTitle();
	}

}

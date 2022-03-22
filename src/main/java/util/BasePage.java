package util;

import java.io.File;

import org.codehaus.plexus.util.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

public class BasePage {
	
//	public void screenShot(WebDriver driver, String fileWithPath) throws Exception {
//	TakesScreenshot srcShot = ((TakesScreenshot) driver);// take a screenshot
//	File SrcFile = srcShot.getScreenshotAs(OutputType.FILE);//It put it into a file.
//	File DestFile = new File(fileWithPath);//It save a file where we want.
//	FileUtils.copyFile(SrcFile, DestFile);//It save it your a local machine.
//}


	public void screenShot(WebDriver driver, String fileWithPath) throws Exception{
		TakesScreenshot  srcShot = ((TakesScreenshot)driver);
		File SrcFile = srcShot.getScreenshotAs(OutputType.FILE);
		File DestFile = new File(fileWithPath);
		FileUtils.copyFile(SrcFile, DestFile);
	}
}

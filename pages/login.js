exports.LoginPage= class LoginPage {

    //create locators
    
    constructor(page) {
        this.page = page;
        this.login_link = page.getByRole('link', { name: 'Login' });
        this.username_textBox = page.locator('input[name="username"]');

        this.passwprd_textbox = page.locator('input[name="password"]');

        this.login_button = page.getByRole('button', { name: 'Login' });
        this.sportsbook_menu = page.getByLabel('Sportbook');
        this.search_textbox = page.locator('iframe[name="game-launcher-by-url"]').contentFrame().getByPlaceholder('Search League/Event...');

        this.searchresult_text = page.locator('iframe[name="game-launcher-by-url"]').contentFrame().getByText('There are no search results.');
    }
    //create actions 2 ways -1.create function for 1 task 2.create each action method
    //1.

    async goToLoginPage(){
await this.page.goto('https://www.mspzvx.com/in/');

    }
    async login(username,password) {
        await this.login_link.click();
        await this.username_textBox.fill(username);
        await this.passwprd_textbox.fill(password);
        await this.login_button.click();

    }



    //2
    clickLoginLink() {

    }
    enterUsername() {

    }
    enterPassword() {

    }
    clickLoginBtn() {

    }

}
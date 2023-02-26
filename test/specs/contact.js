import ContactPage from "../pages/contact-page";
import { faker } from "@faker-js/faker";

describe("Fill in Contact input fields, submit form & assert success message", () => {
  it("fill in name, email, phone & message", async () => {
    await ContactPage.open();

    await ContactPage.submitForm(
      faker.name.fullName(),
      faker.internet.email(),
      faker.phone.number(),
      faker.lorem.paragraphs(2)
    );
  });

  it("Assert success message", async () => {
    await expect(ContactPage.alertRole).toHaveText(
      "Thanks for contacting us! We will be in touch with you shortly"
    );
  });
});
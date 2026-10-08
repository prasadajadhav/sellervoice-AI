const TRAINING_DATA = [
  {
    "label": "Lead relevance",
    "text": "Buyer enquiries are irrelevant to my product category"
  },
  {
    "label": "Lead relevance",
    "text": "Leads are from locations outside our delivery area"
  },
  {
    "label": "Lead relevance",
    "text": "Buyers request tiny quantities below our minimum order"
  },
  {
    "label": "Lead relevance",
    "text": "I sell industrial pumps but receive enquiries for clothing"
  },
  {
    "label": "Lead relevance",
    "text": "The buyer requirements do not match my catalogue"
  },
  {
    "label": "Lead relevance",
    "text": "Too many unrelated leads waste our sales time"
  },
  {
    "label": "Lead relevance",
    "text": "Please match enquiries to the products we actually sell"
  },
  {
    "label": "Lead relevance",
    "text": "The lead location is wrong for my service region"
  },
  {
    "label": "Lead relevance",
    "text": "Enquiries should include quantity and product specifications"
  },
  {
    "label": "Lead relevance",
    "text": "I need relevant buyers interested in bulk orders"
  },
  {
    "label": "Lead relevance",
    "text": "Most enquiries are for a different product category"
  },
  {
    "label": "Lead relevance",
    "text": "Filter buyer requests by location and minimum quantity"
  },
  {
    "label": "Buyer responsiveness",
    "text": "Buyers do not answer calls after sending enquiries"
  },
  {
    "label": "Buyer responsiveness",
    "text": "The buyer phone number is unreachable"
  },
  {
    "label": "Buyer responsiveness",
    "text": "I respond to leads but buyers never reply"
  },
  {
    "label": "Buyer responsiveness",
    "text": "Many buyer contacts have invalid phone numbers"
  },
  {
    "label": "Buyer responsiveness",
    "text": "Customers stop responding after I send a quotation"
  },
  {
    "label": "Buyer responsiveness",
    "text": "I cannot contact the buyer because the number is wrong"
  },
  {
    "label": "Buyer responsiveness",
    "text": "Our quotations receive no response from buyers"
  },
  {
    "label": "Buyer responsiveness",
    "text": "Buyers are not answering messages or phone calls"
  },
  {
    "label": "Buyer responsiveness",
    "text": "Please verify buyer contact details before sharing leads"
  },
  {
    "label": "Buyer responsiveness",
    "text": "Most buyer numbers are switched off when we call"
  },
  {
    "label": "Buyer responsiveness",
    "text": "The buyer disappears after asking for a quote"
  },
  {
    "label": "Buyer responsiveness",
    "text": "I need reminders to follow up unanswered quotations"
  },
  {
    "label": "Onboarding & catalogue",
    "text": "My seller verification is stuck and documents are pending"
  },
  {
    "label": "Onboarding & catalogue",
    "text": "I cannot upload product images to my catalogue"
  },
  {
    "label": "Onboarding & catalogue",
    "text": "The registration process rejects my business documents"
  },
  {
    "label": "Onboarding & catalogue",
    "text": "Adding products to the catalogue is confusing"
  },
  {
    "label": "Onboarding & catalogue",
    "text": "My company profile approval has been pending for days"
  },
  {
    "label": "Onboarding & catalogue",
    "text": "I need help completing seller registration and verification"
  },
  {
    "label": "Onboarding & catalogue",
    "text": "Product listing upload fails when I add images"
  },
  {
    "label": "Onboarding & catalogue",
    "text": "The catalogue editor will not save product specifications"
  },
  {
    "label": "Onboarding & catalogue",
    "text": "How can I update the business address on my profile"
  },
  {
    "label": "Onboarding & catalogue",
    "text": "My verification documents were rejected without explanation"
  },
  {
    "label": "Onboarding & catalogue",
    "text": "Please simplify adding prices and photos to product listings"
  },
  {
    "label": "Onboarding & catalogue",
    "text": "I cannot finish onboarding because approval is delayed"
  },
  {
    "label": "Subscription & billing",
    "text": "My subscription was renewed without clear notice"
  },
  {
    "label": "Subscription & billing",
    "text": "I was charged twice for the paid plan"
  },
  {
    "label": "Subscription & billing",
    "text": "Please explain the subscription invoice and refund policy"
  },
  {
    "label": "Subscription & billing",
    "text": "The paid membership price is unclear"
  },
  {
    "label": "Subscription & billing",
    "text": "I want to cancel my plan and stop auto renewal"
  },
  {
    "label": "Subscription & billing",
    "text": "The invoice has an incorrect tax amount"
  },
  {
    "label": "Subscription & billing",
    "text": "My payment failed but money was deducted"
  },
  {
    "label": "Subscription & billing",
    "text": "Please refund the duplicate subscription charge"
  },
  {
    "label": "Subscription & billing",
    "text": "I cannot find the cancellation option for my membership"
  },
  {
    "label": "Subscription & billing",
    "text": "The renewal fee is higher than promised"
  },
  {
    "label": "Subscription & billing",
    "text": "I need a receipt for my membership payment"
  },
  {
    "label": "Subscription & billing",
    "text": "The billing team has not processed my refund"
  },
  {
    "label": "App reliability",
    "text": "The app crashes whenever I open the inbox"
  },
  {
    "label": "App reliability",
    "text": "Notifications arrive late and I miss new messages"
  },
  {
    "label": "App reliability",
    "text": "The application is slow and freezes on my phone"
  },
  {
    "label": "App reliability",
    "text": "I cannot login because the app shows an error"
  },
  {
    "label": "App reliability",
    "text": "The inbox fails to load on mobile"
  },
  {
    "label": "App reliability",
    "text": "Push notifications are not working on my device"
  },
  {
    "label": "App reliability",
    "text": "The app keeps logging me out during use"
  },
  {
    "label": "App reliability",
    "text": "Messages do not sync between the app and website"
  },
  {
    "label": "App reliability",
    "text": "The screen freezes when I open the dashboard"
  },
  {
    "label": "App reliability",
    "text": "The mobile app crashes after the latest update"
  },
  {
    "label": "App reliability",
    "text": "Login fails even after resetting my password"
  },
  {
    "label": "App reliability",
    "text": "The app is unavailable and keeps showing a server error"
  }
];
const TEST_DATA = [
  {
    "label": "Lead relevance",
    "text": "Enquiries concern products we do not supply"
  },
  {
    "label": "Lead relevance",
    "text": "Filter requests below our minimum order quantity"
  },
  {
    "label": "Lead relevance",
    "text": "Our delivery region does not match incoming leads"
  },
  {
    "label": "Lead relevance",
    "text": "We get unrelated buyer requirements"
  },
  {
    "label": "Buyer responsiveness",
    "text": "The contact number provided for the buyer is invalid"
  },
  {
    "label": "Buyer responsiveness",
    "text": "No reply after we send quotations"
  },
  {
    "label": "Buyer responsiveness",
    "text": "Buyers ignore our calls and messages"
  },
  {
    "label": "Buyer responsiveness",
    "text": "I need a way to follow up with unreachable buyers"
  },
  {
    "label": "Onboarding & catalogue",
    "text": "Business documents are still awaiting verification"
  },
  {
    "label": "Onboarding & catalogue",
    "text": "Uploading images to a product listing fails"
  },
  {
    "label": "Onboarding & catalogue",
    "text": "Registration is blocked by pending profile approval"
  },
  {
    "label": "Onboarding & catalogue",
    "text": "The catalogue editor loses product prices"
  },
  {
    "label": "Subscription & billing",
    "text": "Cancel my membership before the next renewal"
  },
  {
    "label": "Subscription & billing",
    "text": "The plan invoice includes a duplicate charge"
  },
  {
    "label": "Subscription & billing",
    "text": "My subscription payment needs a refund"
  },
  {
    "label": "Subscription & billing",
    "text": "I need clarification on the membership fee"
  },
  {
    "label": "App reliability",
    "text": "The inbox screen crashes on mobile"
  },
  {
    "label": "App reliability",
    "text": "The application freezes after login"
  },
  {
    "label": "App reliability",
    "text": "Notifications are delayed on my device"
  },
  {
    "label": "App reliability",
    "text": "My messages fail to sync on the website"
  }
];
const SAMPLE_DATA = [
  {
    "id": 1,
    "text": "Buyer enquiries are irrelevant to my product category",
    "segment": "Manufacturer",
    "severity": 3
  },
  {
    "id": 2,
    "text": "Leads are from locations outside our delivery area",
    "segment": "Wholesaler",
    "severity": 2
  },
  {
    "id": 3,
    "text": "Buyers request tiny quantities below our minimum order",
    "segment": "Service provider",
    "severity": 2
  },
  {
    "id": 4,
    "text": "I sell industrial pumps but receive enquiries for clothing",
    "segment": "Manufacturer",
    "severity": 1
  },
  {
    "id": 5,
    "text": "The buyer requirements do not match my catalogue",
    "segment": "Wholesaler",
    "severity": 3
  },
  {
    "id": 6,
    "text": "Too many unrelated leads waste our sales time",
    "segment": "Service provider",
    "severity": 2
  },
  {
    "id": 7,
    "text": "Please match enquiries to the products we actually sell",
    "segment": "Manufacturer",
    "severity": 2
  },
  {
    "id": 8,
    "text": "The lead location is wrong for my service region",
    "segment": "Wholesaler",
    "severity": 1
  },
  {
    "id": 9,
    "text": "Enquiries should include quantity and product specifications",
    "segment": "Service provider",
    "severity": 3
  },
  {
    "id": 10,
    "text": "Buyers do not answer calls after sending enquiries",
    "segment": "Manufacturer",
    "severity": 3
  },
  {
    "id": 11,
    "text": "The buyer phone number is unreachable",
    "segment": "Wholesaler",
    "severity": 2
  },
  {
    "id": 12,
    "text": "I respond to leads but buyers never reply",
    "segment": "Service provider",
    "severity": 2
  },
  {
    "id": 13,
    "text": "Many buyer contacts have invalid phone numbers",
    "segment": "Manufacturer",
    "severity": 1
  },
  {
    "id": 14,
    "text": "Customers stop responding after I send a quotation",
    "segment": "Wholesaler",
    "severity": 3
  },
  {
    "id": 15,
    "text": "I cannot contact the buyer because the number is wrong",
    "segment": "Service provider",
    "severity": 2
  },
  {
    "id": 16,
    "text": "My seller verification is stuck and documents are pending",
    "segment": "Manufacturer",
    "severity": 3
  },
  {
    "id": 17,
    "text": "I cannot upload product images to my catalogue",
    "segment": "Wholesaler",
    "severity": 2
  },
  {
    "id": 18,
    "text": "The registration process rejects my business documents",
    "segment": "Service provider",
    "severity": 2
  },
  {
    "id": 19,
    "text": "Adding products to the catalogue is confusing",
    "segment": "Manufacturer",
    "severity": 1
  },
  {
    "id": 20,
    "text": "My subscription was renewed without clear notice",
    "segment": "Manufacturer",
    "severity": 3
  },
  {
    "id": 21,
    "text": "I was charged twice for the paid plan",
    "segment": "Wholesaler",
    "severity": 2
  },
  {
    "id": 22,
    "text": "Please explain the subscription invoice and refund policy",
    "segment": "Service provider",
    "severity": 2
  },
  {
    "id": 23,
    "text": "The app crashes whenever I open the inbox",
    "segment": "Manufacturer",
    "severity": 3
  },
  {
    "id": 24,
    "text": "Notifications arrive late and I miss new messages",
    "segment": "Wholesaler",
    "severity": 2
  }
];
if(typeof module!=="undefined")module.exports={TRAINING_DATA,TEST_DATA,SAMPLE_DATA};
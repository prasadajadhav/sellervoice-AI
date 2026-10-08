const TRAINING_DATA = [
  {
    "label": "Billing",
    "text": "Please send the invoice for last month payment"
  },
  {
    "label": "Billing",
    "text": "Our invoice amount is incorrect please revise the bill"
  },
  {
    "label": "Billing",
    "text": "Payment is overdue please check the outstanding balance"
  },
  {
    "label": "Billing",
    "text": "Please share bank details for the payment transfer"
  },
  {
    "label": "Billing",
    "text": "We have a billing discrepancy in the monthly invoice"
  },
  {
    "label": "Billing",
    "text": "The refund has not reached our bank account"
  },
  {
    "label": "Billing",
    "text": "Please confirm receipt of payment and clear the balance"
  },
  {
    "label": "Billing",
    "text": "Tax charges on the invoice need correction"
  },
  {
    "label": "Billing",
    "text": "Can you send a credit note for the duplicate charge"
  },
  {
    "label": "Billing",
    "text": "Our finance team needs the invoice and payment receipt"
  },
  {
    "label": "Billing",
    "text": "The billed amount exceeds the agreed fee"
  },
  {
    "label": "Billing",
    "text": "Please update billing details before sending the invoice"
  },
  {
    "label": "Performance",
    "text": "Campaign clicks and conversions have dropped this week"
  },
  {
    "label": "Performance",
    "text": "Our click through rate is low please optimize performance"
  },
  {
    "label": "Performance",
    "text": "Cost per acquisition has increased and return on spend fell"
  },
  {
    "label": "Performance",
    "text": "Please improve conversion rate with better audience targeting"
  },
  {
    "label": "Performance",
    "text": "The campaign is underperforming against our conversion goal"
  },
  {
    "label": "Performance",
    "text": "We need to optimize bids to reduce cost per click"
  },
  {
    "label": "Performance",
    "text": "Traffic increased but conversions remain low"
  },
  {
    "label": "Performance",
    "text": "Please review the weekly performance report and improve results"
  },
  {
    "label": "Performance",
    "text": "Return on advertising spend is below target"
  },
  {
    "label": "Performance",
    "text": "The click rate fell after changing creative"
  },
  {
    "label": "Performance",
    "text": "We need more conversions within the existing budget"
  },
  {
    "label": "Performance",
    "text": "Analyze campaign results and optimize the audience"
  },
  {
    "label": "Technical",
    "text": "The tracking pixel is broken and events are missing"
  },
  {
    "label": "Technical",
    "text": "Our dashboard shows an error when loading reports"
  },
  {
    "label": "Technical",
    "text": "The API integration fails with an authentication error"
  },
  {
    "label": "Technical",
    "text": "The website tag is not firing after deployment"
  },
  {
    "label": "Technical",
    "text": "We cannot login to the dashboard due to a server error"
  },
  {
    "label": "Technical",
    "text": "Please debug the conversion tracking integration"
  },
  {
    "label": "Technical",
    "text": "The API returns a timeout and no data"
  },
  {
    "label": "Technical",
    "text": "An error prevents the report from loading"
  },
  {
    "label": "Technical",
    "text": "The pixel sends duplicate events please fix the bug"
  },
  {
    "label": "Technical",
    "text": "Our tracking script stopped working on the website"
  },
  {
    "label": "Technical",
    "text": "The dashboard is unavailable and login fails"
  },
  {
    "label": "Technical",
    "text": "Please resolve the broken integration and missing events"
  },
  {
    "label": "Campaign setup",
    "text": "Please launch a new campaign next Monday"
  },
  {
    "label": "Campaign setup",
    "text": "Set up a campaign targeting mobile users in Mumbai"
  },
  {
    "label": "Campaign setup",
    "text": "Upload new creative assets before the launch date"
  },
  {
    "label": "Campaign setup",
    "text": "We need to create a campaign with a daily budget"
  },
  {
    "label": "Campaign setup",
    "text": "Please schedule the new advertising campaign for tomorrow"
  },
  {
    "label": "Campaign setup",
    "text": "Configure location targeting and upload the banners"
  },
  {
    "label": "Campaign setup",
    "text": "Create a new ad group and set the start date"
  },
  {
    "label": "Campaign setup",
    "text": "Please activate the campaign after the creative approval"
  },
  {
    "label": "Campaign setup",
    "text": "Set up audience targeting for our product launch"
  },
  {
    "label": "Campaign setup",
    "text": "The new campaign needs banners and budget configuration"
  },
  {
    "label": "Campaign setup",
    "text": "Please pause the old campaign and launch a new one"
  },
  {
    "label": "Campaign setup",
    "text": "We need approval for creative assets before activation"
  }
];
const TEST_DATA = [
  {
    "label": "Billing",
    "text": "Please correct the invoice and refund the extra charge"
  },
  {
    "label": "Billing",
    "text": "Confirm whether the outstanding payment reached your bank"
  },
  {
    "label": "Billing",
    "text": "Finance needs a receipt for the monthly bill"
  },
  {
    "label": "Billing",
    "text": "The tax amount on our invoice looks wrong"
  },
  {
    "label": "Performance",
    "text": "Clicks are falling and acquisition costs are rising"
  },
  {
    "label": "Performance",
    "text": "Optimize targeting to improve return on spend"
  },
  {
    "label": "Performance",
    "text": "Review the conversion rate and campaign results"
  },
  {
    "label": "Performance",
    "text": "Our audience produces low conversions despite high traffic"
  },
  {
    "label": "Technical",
    "text": "Login returns an error and the dashboard is broken"
  },
  {
    "label": "Technical",
    "text": "Debug the pixel because events are not firing"
  },
  {
    "label": "Technical",
    "text": "The API times out during authentication"
  },
  {
    "label": "Technical",
    "text": "Reports fail to load after a script update"
  },
  {
    "label": "Campaign setup",
    "text": "Launch a new campaign with these banners tomorrow"
  },
  {
    "label": "Campaign setup",
    "text": "Set the start date and configure a daily budget"
  },
  {
    "label": "Campaign setup",
    "text": "Upload creative and activate the new ad group"
  },
  {
    "label": "Campaign setup",
    "text": "Schedule our product launch with mobile targeting"
  }
];
if(typeof module!=="undefined") module.exports={TRAINING_DATA,TEST_DATA};

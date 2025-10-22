import { 
  SiShopify, 
  SiStripe, 
  SiSquare, 
  SiSalesforce, 
  SiHubspot, 
  SiZendesk, 
  SiSlack, 
  SiMailchimp,
  SiUdemy,
  SiSurveymonkey,
  SiHotjar,
  SiUipath,
  SiTrello,
  SiAsana,
  SiNotion,
  SiAirtable
} from "react-icons/si";

export function ClientLogos() {
  const clients = [
    { icon: SiShopify, name: "Shopify", industry: "E-commerce" },
    { icon: SiStripe, name: "Stripe", industry: "Payments" },
    { icon: SiSquare, name: "Square", industry: "Payments" },
    { icon: SiSalesforce, name: "Salesforce", industry: "CRM" },
    { icon: SiHubspot, name: "HubSpot", industry: "Marketing" },
    { icon: SiZendesk, name: "Zendesk", industry: "Support" },
    { icon: SiSlack, name: "Slack", industry: "Communication" },
    { icon: SiMailchimp, name: "Mailchimp", industry: "Email Marketing" },
    { icon: SiUdemy, name: "Udemy", industry: "Education" },
    { icon: SiSurveymonkey, name: "SurveyMonkey", industry: "Survey" },
    { icon: SiHotjar, name: "Hotjar", industry: "Analytics" },
    { icon: SiUipath, name: "UiPath", industry: "Automation" },
    { icon: SiTrello, name: "Trello", industry: "Project Management" },
    { icon: SiAsana, name: "Asana", industry: "Workflow" },
    { icon: SiNotion, name: "Notion", industry: "Productivity" },
    { icon: SiAirtable, name: "Airtable", industry: "Database" },
  ];

  return (
    <section className="py-6 md:py-8 border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <p className="text-center text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-4 md:mb-6">
          Trusted by Global Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-8 md:gap-x-12 gap-y-4 md:gap-y-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="opacity-50 hover:opacity-100 transition-opacity"
              data-testid={`logo-${client.name.toLowerCase()}`}
            >
              <client.icon className="h-5 sm:h-6 md:h-7 w-5 sm:w-6 md:w-7 text-foreground" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

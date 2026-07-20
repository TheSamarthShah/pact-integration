export const industryContent = {
  manufacturing: {
    hero: {
      label: "Supply Chain Research Initiative : 2026",
      headline: "Enterprise software is built by people who have never managed a factory floor.",
      subhead: "We are looking for 5 experienced Plant Managers to teach us the reality of industrial operations."
    },
    problem: {
      title: "Built for databases, not operations.",
      p1: "Standard legacy ERPs expect clean data inputs and perfectly predictable lead times. The reality of the industrial landscape is messy. Discrepancies happen at the unloading dock, line-items are handwritten, and vendor pricing shifts dynamically.",
      p2: "When software fails to handle these edge cases gracefully, it leaves your staff stuck doing manual reconciliation on spreadsheets just to fill the software's gaps.",
      flaw1: {
        title: "1. Rigid Rule Architecture",
        desc: "If an invoice is off by a single rupee due to a rounded tax digit, legacy systems halt the pipeline, requiring manual human override."
      },
      flaw2: {
        title: "2. Blind Spot on Raw Data",
        desc: "Current tools cannot read a stained, physical Goods Receipt Note (GRN) or cross-reference it autonomously against a messy email chain."
      }
    },
    audit: {
      title: "Where we are mapping operational friction.",
      desc: "We are not looking for perfect systems. We want to sit down with teams dealing with high-volume, complex manufacturing realities.",
      area1: {
        title: "The Three-Way Match",
        desc: "We want to understand exactly how your team handles discrepancies between Purchase Orders, GRNs, and Vendor Invoices."
      },
      area2: {
        title: "Unstructured Intake",
        desc: "Show us your messiest inputs—physical delivery challans, informal WhatsApp vendor updates, and formal ERP manual entry."
      },
      area3: {
        title: "Exception Loops",
        desc: "When an invoice is flagged, what happens next? We are mapping the exact communication loops required to authorize payments."
      }
    },
    application: {
      targetRole: "Plant Manager / Finance Director",
      softwarePlaceholder: "SAP, Oracle, Tally, etc.",
      painpointPlaceholder: "e.g., Manually matching raw material GRNs to vendor emails..."
    }
  },

  logistics: {
    hero: {
      label: "Freight Operations Research : 2026",
      headline: "Logistics software is built by people who have never run a dispatch yard.",
      subhead: "We are looking for 5 Fleet Directors to teach us where transport management systems actually break down."
    },
    problem: {
      title: "Built for clean offices, not highways.",
      p1: "Transport Management Systems (TMS) look great in a boardroom, but they fail the moment a truck hits the road. They expect linear routes, perfect cellular service, and drivers who meticulously log every expense in real-time.",
      p2: "In reality, routes change, detention times aren't logged properly, and Proof of Delivery (POD) documents get crumpled in the cab. You are left piecing together the truth from WhatsApp timestamps and fuel receipts.",
      flaw1: {
        title: "1. The POD Disconnect",
        desc: "Drivers send a blurry photo of a stamped delivery receipt, but billing can't process it until someone manually types that data into the system."
      },
      flaw2: {
        title: "2. Hidden Profit Leaks",
        desc: "Detention charges, toll variations, and route deviations happen daily, but standard software makes it nearly impossible to reconcile them against the original quote."
      }
    },
    audit: {
      title: "Where we are mapping freight bottlenecks.",
      desc: "We want to study the friction between the physical movement of goods and the digital flow of cash.",
      area1: {
        title: "Proof of Delivery Reconciliation",
        desc: "Show us how you bridge the gap between a physical signature at the dock and the final invoice sent to the client."
      },
      area2: {
        title: "Driver Expense Audits",
        desc: "We want to see the mess. How do you currently verify fuel slips, toll receipts, and on-road expense claims against dispatch records?"
      },
      area3: {
        title: "Detention & Exception Billing",
        desc: "When a truck is held up for 6 hours, how is that documented, verified, and eventually billed without causing a dispute?"
      }
    },
    application: {
      targetRole: "Fleet Director / Logistics Head",
      softwarePlaceholder: "Custom TMS, Excel, Fleetx, etc.",
      painpointPlaceholder: "e.g., Chasing drivers for PODs to close out the billing cycle..."
    }
  },

  jewelry: {
    hero: {
      label: "Specialized Retail Research : 2026",
      headline: "Generic accounting software cannot handle the reality of high-value inventory.",
      subhead: "We are looking for 5 wholesale and retail owners to teach us the exact bottlenecks in specialized bookkeeping workflows."
    },
    problem: {
      title: "The dual-ledger nightmare.",
      p1: "Standard accounting tools like Tally were built to track fiat currency. They completely break down when you need to simultaneously track the weight, purity, and market value of raw gold or diamonds.",
      p2: "Because generic software doesn't understand metal loss during manufacturing (Karigar tracking) or daily rate fluctuations, jewelry businesses are forced to run their actual operations on complex, fragile spreadsheets.",
      flaw1: {
        title: "1. The Metal vs. Money Gap",
        desc: "If a customer trades in 50g of 22k gold to buy a 24k piece, standard software struggles to reconcile the physical inventory shift with the financial ledger."
      },
      flaw2: {
        title: "2. Karigar (Artisan) Tracking",
        desc: "Sending 100g of gold to an artisan and receiving 92g back as finished jewelry requires complex loss-calculation that standard ERPs simply cannot automate."
      }
    },
    audit: {
      title: "Where we are mapping ledger friction.",
      desc: "We are studying the exact failure points between traditional accounting software and the realities of the jewelry trade.",
      area1: {
        title: "Karigar Reconciliation",
        desc: "Walk us through how you track raw metal sent to craftsmen, account for expected loss, and log the finished goods."
      },
      area2: {
        title: "Daily Rate Fluctuations",
        desc: "Show us how you handle invoicing and inventory valuation when the core metric (the gold rate) changes multiple times a day."
      },
      area3: {
        title: "Unstructured Orders",
        desc: "We want to see how a custom design order goes from a WhatsApp conversation into a formal tracked production ticket."
      }
    },
    application: {
      targetRole: "Business Owner / Finance Lead",
      softwarePlaceholder: "Tally, Excel, Custom Software",
      painpointPlaceholder: "e.g., Reconciling metal loss with the Karigars at the end of the month..."
    }
  }
};

export type IndustryKey = keyof typeof industryContent;
export type FeaturedWorkItem = {
  category: string;
  technology: string;
  featured: boolean;
  title: string;
  description: string;
  highlights: readonly string[];
  tags: readonly string[];
  metadata: readonly string[];
  actionLabel: string;
  actionHref: string;
  secondaryActionLabel?: string;
  secondaryActionHref?: string;
  confidentialityNote?: string;
};

export const featuredWorkItems: readonly FeaturedWorkItem[] = [
  {
    category: "Utility GIS",
    technology: "ArcGIS Pro",
    featured: true,
    title: "GIS Technician - Black Hills Energy",
    description:
      "GIS gas-data management supporting utility operations across Colorado and part of Nebraska, including data editing, mapping, versioned database maintenance, engineering drawing interpretation, and QA/QC.",
    highlights: [
      "Utility data editing, mapping, and reporting",
      "Versioned GIS database maintenance and data-quality workflows"
    ],
    tags: ["Utility GIS", "ArcGIS Pro", "QA/QC", "Engineering Drawings"],
    metadata: ["Professional Experience", "March 2024-Present"],
    actionLabel: "View Experience",
    actionHref: "/experience",
    confidentialityNote:
      "Portfolio summary only - no proprietary utility data, internal maps, customer information, or engineering drawings are displayed."
  },
  {
    category: "Research",
    technology: "Spatial Analysis",
    featured: true,
    title: "New Madrid Seismic Zone Risk Modeling",
    description:
      "Master's thesis assessing peak ground acceleration and potential economic-loss and casualty scenarios associated with earthquakes of different magnitudes in the New Madrid Seismic Zone.",
    highlights: [
      "Peak ground acceleration scenario modeling",
      "Economic-loss and casualty assessment for preparedness planning"
    ],
    tags: ["Seismic Risk", "GIS Modeling", "PGA", "Hazard Assessment"],
    metadata: ["MS Thesis", "2023"],
    actionLabel: "View Research",
    actionHref: "/research",
    secondaryActionLabel: "Thesis Record",
    secondaryActionHref: "https://scholarworks.uark.edu/etd/5129/"
  },
  {
    category: "Remote Sensing",
    technology: "GIS & Machine Learning",
    featured: true,
    title: "Urban Flood Susceptibility Mapping Review",
    description:
      "Peer-reviewed review of remote sensing datasets, GIS methods, machine-learning approaches, and contributing factors used in urban flood susceptibility mapping.",
    highlights: [
      "Review of remote-sensing and GIS modeling approaches",
      "Examination of flood causative factors and methodological challenges"
    ],
    tags: ["Remote Sensing", "Flood Mapping", "GIS", "Machine Learning"],
    metadata: ["Journal Article", "2025"],
    actionLabel: "View Publication",
    actionHref: "https://www.mdpi.com/2072-4292/17/3/524",
    secondaryActionLabel: "Google Scholar",
    secondaryActionHref: "https://scholar.google.com/citations?user=729bwoUAAAAJ&hl=en"
  }
] as const;

export const researchFilters = [
  "All",
  "Seismic Risk",
  "Remote Sensing",
  "Flood Mapping",
  "Presentations"
] as const;

export type ResearchFilter = (typeof researchFilters)[number];

export type ResearchItem = {
  id: string;
  type: string;
  year: string;
  title: string;
  venue: string;
  excerpt: string;
  topics: readonly string[];
  filters: readonly ResearchFilter[];
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
};

export const researchItems: readonly ResearchItem[] = [
  {
    id: "new-madrid-thesis",
    type: "MS Thesis",
    year: "2023",
    title:
      "Modeling the Peak Ground Acceleration and Assessing the Economic Loss and Casualty Due to Potential Earthquakes of Various Magnitudes in the New Madrid Seismic Zone",
    venue: "University of Arkansas",
    excerpt:
      "Thesis research focused on peak ground acceleration, economic-loss, and casualty scenarios for earthquakes of different magnitudes in the New Madrid Seismic Zone.",
    topics: ["Seismic Risk", "GIS Modeling", "PGA", "Hazard Assessment"],
    filters: ["Seismic Risk"],
    primaryAction: {
      label: "Thesis Record",
      href: "https://scholarworks.uark.edu/etd/5129/"
    },
    secondaryAction: {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=729bwoUAAAAJ&hl=en"
    }
  },
  {
    id: "urban-flood-review",
    type: "Journal Article",
    year: "2025",
    title:
      "A Systematic Review of Urban Flood Susceptibility Mapping: Remote Sensing, Machine Learning, and Other Modeling Approaches",
    venue: "Remote Sensing",
    excerpt:
      "Peer-reviewed review of remote sensing datasets, GIS methods, machine-learning approaches, causative factors, and methodological challenges in urban flood susceptibility mapping.",
    topics: ["Remote Sensing", "Flood Mapping", "GIS", "Machine Learning"],
    filters: ["Remote Sensing", "Flood Mapping"],
    primaryAction: {
      label: "View Publication",
      href: "https://www.mdpi.com/2072-4292/17/3/524"
    },
    secondaryAction: {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=729bwoUAAAAJ&hl=en"
    }
  },
  {
    id: "americaview-2023",
    type: "Conference Presentation",
    year: "2023",
    title: "AmericaView Earth Sensors and Research Committee Meeting",
    venue: "AmericaView",
    excerpt:
      "Thesis-related seismic risk research presentation connected to peak ground acceleration, economic-loss, and casualty assessment work.",
    topics: ["Presentations", "Seismic Risk", "Hazard Assessment"],
    filters: ["Presentations", "Seismic Risk"]
  },
  {
    id: "gsa-2022",
    type: "Conference Presentation",
    year: "2022",
    title: "GSA North-Central/Southeastern Joint Section Meeting",
    venue: "Cincinnati, Ohio",
    excerpt:
      "Conference presentation on earthquake economic-loss and casualty assessment for different magnitudes at the New Madrid Fault Zone.",
    topics: ["Presentations", "Seismic Risk", "Economic Loss"],
    filters: ["Presentations", "Seismic Risk"]
  }
] as const;

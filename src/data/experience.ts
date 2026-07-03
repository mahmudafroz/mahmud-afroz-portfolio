export type ExperienceEntry = {
  id: string;
  employmentType: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  summary: string;
  bullets: readonly string[];
  tags: readonly string[];
  confidentialityNote?: string;
};

export const confidentialityNote =
  "Certain utility and operations work is confidential. This portfolio describes role scope and methods without publishing proprietary datasets, customer information, utility infrastructure records, or internal deliverables.";

export const experienceEntries: readonly ExperienceEntry[] = [
  {
    id: "black-hills-energy",
    employmentType: "Current role",
    role: "GIS Technician",
    organization: "Black Hills Energy",
    location: "Fayetteville, Arkansas",
    period: "March 2024-Present",
    summary:
      "GIS gas data management supporting utility operations across Colorado and part of Nebraska.",
    bullets: [
      "Generate and perform gas utility data editing, map creation, and report generation.",
      "Maintain and update versioned GIS databases so records reflect current information.",
      "Perform query and scripting operations for daily requests and maintenance.",
      "Interpret engineering, CAD, and as-built information and incorporate approved updates into GIS systems.",
      "Support field and engineering communication with mapping, data-quality, and QA/QC workflows."
    ],
    tags: ["Utility GIS", "ArcGIS Pro", "Versioned GIS", "QA/QC", "As-Built Integration"],
    confidentialityNote
  },
  {
    id: "mullins-library",
    employmentType: "Professional role",
    role: "Library Geographic Information Systems Specialist",
    organization: "Data Services, Mullins Library, University of Arkansas",
    location: "Fayetteville, Arkansas",
    period: "August 2022-June 2024",
    summary:
      "GIS and ArcGIS training standardization, reusable lesson development, and geospatial instruction support for University Libraries.",
    bullets: [
      "Collaborated with library partners to standardize GIS and ArcGIS training across University Libraries.",
      "Created reusable lesson plans with GitHub, Jupyter Notebooks, and Markdown.",
      "Developed instruction on GIS fundamentals, ArcGIS, StoryMaps, data integration, and Python with ArcGIS."
    ],
    tags: ["GIS Education", "ArcGIS", "StoryMaps", "Python", "Jupyter Notebook"]
  },
  {
    id: "geosciences-computing",
    employmentType: "Technical role",
    role: "Geosciences Computing Technician",
    organization: "Department of Geosciences, University of Arkansas",
    location: "Fayetteville, Arkansas",
    period: "August 2019-August 2021",
    summary:
      "Geospatial lab support, ArcGIS Online administration, software installation workflows, licensing, and user support.",
    bullets: [
      "Supported geospatial computing operations for teaching and research environments.",
      "Assisted with ArcGIS Online administration, access, and licensing workflows.",
      "Provided technical support for software compatibility, updates, and geospatial lab use."
    ],
    tags: ["Lab Support", "ArcGIS Online", "Licensing", "Technical Support"]
  },
  {
    id: "teaching-assistant",
    employmentType: "Teaching role",
    role: "Teaching Assistant",
    organization: "Department of Geosciences, University of Arkansas",
    location: "Fayetteville, Arkansas",
    period: "August 2019-May 2022",
    summary:
      "Teaching support for geospatial UAS, enterprise and multiuser GIS, spatial analysis, GIS applications, and physical geology laboratory courses.",
    bullets: [
      "Supported courses in geospatial unmanned aircraft systems and enterprise GIS.",
      "Assisted spatial analysis and geospatial applications instruction using ArcGIS.",
      "Provided teaching support for physical geology laboratory coursework."
    ],
    tags: ["Teaching", "Spatial Analysis", "Enterprise GIS", "UAS", "ArcGIS"]
  },
  {
    id: "arkansasview",
    employmentType: "Internship",
    role: "GIS Intern",
    organization: "ArkansasView",
    location: "Arkansas",
    period: "2020 and 2022",
    summary:
      "Remote-sensing workflow work, wildfire hazard-map support, ArcGIS model updates, documentation, and GitHub version control.",
    bullets: [
      "Curated remote-sensing workflows connected to applied silvicultural assessment hazard mapping.",
      "Updated GIS models for compatibility with recent ArcGIS Desktop and ArcGIS Pro versions.",
      "Used GitHub for workflow documentation and version control."
    ],
    tags: ["Remote Sensing", "ArcGIS Pro", "ArcGIS Desktop", "GitHub", "Documentation"]
  }
] as const;

export const educationEntries = [
  {
    degree: "Executive Master of Business Administration",
    institution: "Angell Snyder School of Business, Ottawa University",
    detail: "Expected August 2026 - Business Data Analytics"
  },
  {
    degree: "Master of Science in Geography",
    institution: "University of Arkansas",
    detail: "December 2023"
  },
  {
    degree: "Bachelor of Science in Geography and Environment",
    institution: "University of Dhaka",
    detail: "July 2018"
  }
] as const;

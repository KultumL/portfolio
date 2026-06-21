import projData from "@/assets/proj-data.jpg";
import projFullstack from "@/assets/proj-fullstack.jpg";
import projHci from "@/assets/proj-hci.jpg";

import projCompanyInsider from "@/assets/company-insider-thumb.png"; // card thumbnail
import projPipeline from "@/assets/company-insider-pipeline.jpeg";    // What I Built diagram
import projScreenshot1 from "@/assets/company-insider-1.png";
import projScreenshot2 from "@/assets/company-insider-2.png";
import projScreenshot3 from "@/assets/company-insider-3.png";
import projScreenshot4 from "@/assets/company-insider-4.png";
import projScreenshot5 from "@/assets/company-insider-5.png";

import projDueAble from "@/assets/Dueable-thumb.png"; // card thumbnail
import projPipelineDueAble from "@/assets/dueable-pipeline.jpeg";    // What I Built diagram
import projDueAbleScreenshot1 from "@/assets/DueAble-1.png";
import projDueAbleScreenshot2 from "@/assets/DueAble-2.png";
import projDueAbleScreenshot3 from "@/assets/DueAble-3.png";
import projDueAbleScreenshot4 from "@/assets/DueAble-4.png";
import projDueAbleScreenshot5 from "@/assets/DueAble-5.png";
import projDueAbleScreenshot6 from "@/assets/DueAble-6.png";

import projAlmighty from "@/assets/Almighty-thumb.png"; // card thumbnail
import projLoFi1 from "@/assets/Almighty-1.png";
import projLoFi2 from "@/assets/Almighty-2.png";
import projMidFi from "@/assets/Almighty-3.png";
import projHiFi1 from "@/assets/Almighty-4.png";
import projHiFi2 from "@/assets/Almighty-5.png";
import projHiFi3 from "@/assets/Almighty-6.png";

import projTailorMe from "@/assets/TailorMe-thumb.jpg";
import projTailorIdea1 from "@/assets/TailorMe-1.png";
import projTailorIdea2 from "@/assets/TailorMe-2.png";
import projTailorProd1 from "@/assets/TailorMe-4.jpg";
import projTailorProd2 from "@/assets/TailorMe-5.jpg";
import projTailorProd3 from "@/assets/TailorMe-6.jpg";

import projNPGeorgia from "@/assets/NP-Georgia-thumb.png";        // card thumbnail (use that dashboard screenshot you shared)
import projNPScreenshot1 from "@/assets/NP-Georgia-1.png";        // NP count map
import projNPScreenshot2 from "@/assets/NP-Georgia-2.png";        // NP density map
import projNPScreenshot3 from "@/assets/NP-Georgia-3.png";        // Doctor:NP ratio map

import projNPScreenshot5 from "@/assets/NP-Georgia-5.png"; 
import projNPScreenshot6 from "@/assets/NP-Georgia-6.png";         // a scatterplot
import projNPScreenshot7 from "@/assets/NP-Georgia-7.png"; 
import projNPScreenshot8 from "@/assets/NP-Georgia-8.png"; 

import projArtistDecline from "@/assets/artist-decline-thumb.png";    // slide 1 (purple title slide)
import projArtistFig1 from "@/assets/artist-decline-fig1.png";        // cluster heatmap
import projArtistFig2 from "@/assets/artist-decline-fig2.png";        // archetype trajectories 1-4
import projArtistFig3 from "@/assets/artist-decline-fig3.png";
import projArtistFig6 from "@/assets/artist-decline-fig6.png";        // PR curves
import projArtistFig7 from "@/assets/artist-decline-fig7.png";        // confusion matrices
import projArtistFig8 from "@/assets/artist-decline-fig8.png";        // feature importance
import projArtistFig9 from "@/assets/artist-decline-fig9.png";

export type Section = {
  title: string;
  body?: string | string[];
  image?: string | string[];
};

export type Project = {
  slug: string;
  title: string;
  blurb: string;
  tags: string[];
  image: string;
  cover: string;
  coverType?: "image" | "video";
  videoUrl?: string;
  repo?: string;
  demo?: string;
  paper?: string; 
  figma?: string;  
  groupId: string;
  groupTitle: string;
  sections: Section[];
  screenshots?: string[];
  imageAspect?: "video" | "portrait" | "square";
};

export type Group = {
  id: string;
  label: string;
  title: string;
  projects: Project[];
};

const make = (
  groupId: string,
  groupTitle: string,
  slug: string,
  title: string,
  blurb: string,
  tags: string[],
  image: string,
  repo: string,
  sections: Section[],
  demo?: string,
  screenshots?: string[],
  imageAspect?: "video" | "portrait" | "square",
  paper?: string,
  figma?: string,
): Project => ({
  slug,
  title,
  blurb,
  tags,
  image,
  cover: image,
  coverType: "image",
  repo,
  paper,
  figma,
  demo,
  groupId,
  groupTitle,
  sections,
  screenshots,
  imageAspect,
});

export const groups: Group[] = [
  {
    id: "fullstack",
    label: "01 / Full-Stack",
    title: "Full-Stack Projects",
    projects: [
      make("fullstack", "Full-Stack Projects", "company-insider", "Company Insider",
        "AI-powered platform that provides analyst-grade company research including: live financials, SEC-filing Q&A, competitor analysis, trend alerts, and auto-generated investment theses.",
        ["React", "FastAPI", "Gemini API", "Supabase", "SEC EDGAR", "yfinance"],
        projCompanyInsider,
        "https://github.com/KultumL/Kultum-s-Personal-Projects/tree/main/CompanyInsider",
        [
          {
            title: "Overview",
            body: "Company Insider makes professional company research easy for anyone, not just analysts. You search for a public company and instantly get a clear picture of how it is doing. The app pulls live stock prices and key financials from Yahoo Finance, reads the company's official SEC filings, and gathers recent news, then explains all the information collected. It breaks down the main risks, maps out who the company competes with, and writes a full investment thesis on demand. You can also save companies to a watchlist and set up alerts that flag big price moves, unusual trading volume, analyst rating changes, and upcoming earnings, so you always know when something important happens.",
          },
          {
            title: "What I Built",
            body: [
              "An AI-powered equity research platform with a Python FastAPI backend and a React frontend. The core idea behind the project is that the AI does not answer from memory alone. Instead, when a user asks about a company, the system first retrieves live financial data from yfinance, downloads and parses official SEC EDGAR filings, and gathers recent news before passing that context into Google Gemini. I used a retrieval-augmented generation approach so the model answers only from retrieved sources, which keeps responses grounded in real data and reduces hallucinations.",
              "To make the output more trustworthy, I designed the system so each fact is tied to its source, such as a live market data point, a filing, or a news article. That lets users verify the information themselves. The AI analyst combines multiple tools and data sources in one workflow to generate simplified answers, company briefings, competitor comparisons, and full investment theses.",
              "On the frontend, I built a React application where users can sign up, log in, search for companies, and save them to a personal watchlist. I also created a configurable alerts system that lets users track events like large price moves, unusual trading volume, analyst rating changes, and upcoming earnings, with updates surfaced through a notification bell. User accounts, watchlists, and alert preferences are stored in Supabase, and I deployed the frontend on Vercel and the backend on Hugging Face so the full application is live online.",
            ],
            image: projPipeline,
          },
        ],
        "https://companyinsider-six.vercel.app",
        [projCompanyInsider,projScreenshot1, projScreenshot2, projScreenshot3, projScreenshot4, projScreenshot5]
      ),


      make("fullstack", "Full-Stack Projects", "dueable", "DueAble",
        "An academic planner that automatically turns syllabus deadlines into calendar events, giving students a simpler way to stay organized without entering everything by hand.",
        ["React Native", "Expo", "FastAPI", "Supabase", "Gemini API", "Tesseract OCR", "Python"],
        projDueAble,
        "https://github.com/KultumL/Kultum-s-Personal-Projects/tree/main/DueAble",
        [
          {
            title: "Overview",
            body: "DueAble is an all-in-one assignment tracking app built for students. Upload a syllabus as a PDF, a screenshot, or pasted text, and the app automatically extracts every assignment and due date and places them into a calendar planner. Students can also add assignments manually, organize courses into color-coded class folders, and toggle an AI Repair mode that uses Google Gemini to clean up messy or ambiguous dates. The app includes a home dashboard showing what is due today and this week, a calendar view with month, week, and day modes, and a profile screen for account management. All data is private per user through Supabase row-level security.",
          },
          {
            title: "What I Built",
            body: [
              "I served as Product Owner and full-stack developer on a five-person team. My core contribution was the parsing pipeline: I wrote the Python logic in FastAPI that handles three input types, PDF via PyMuPDF, image via Tesseract OCR with OpenCV preprocessing, and plain text. The parser runs five pattern passes to catch assignments written in different formats, from explicit due date phrases to week-based schedule rows, and normalizes everything into ISO dates using dateparser.",
              "I also integrated Google Gemini as an optional repair step that receives the raw syllabus text alongside the regex-extracted seed items and returns a cleaned, deduplicated assignment list. To prevent duplicate imports I implemented SHA-256 hashing of each syllabus upload stored in Supabase, so the same file cannot be parsed twice.",
              "On the frontend I wired the upload modal to all three backend endpoints, built the Supabase schema for users, class folders, and assignments, and set up the cross-platform auth adapter that uses SecureStore on mobile and localStorage on web. The backend is hosted on Render inside Docker so Tesseract and other system dependencies are consistent across environments, and the frontend is deployed on Netlify.",
            ],
            image: projPipelineDueAble,
          },
        ],
        "https://pixelate-nkkto.netlify.app/login",
        [projDueAble,projDueAbleScreenshot1, projDueAbleScreenshot2, projDueAbleScreenshot3,projDueAbleScreenshot4, projDueAbleScreenshot5, projDueAbleScreenshot6]
      ),
    ],
  },
  {
    id: "data",
    label: "02 / Data",
    title: "Data-Based Projects",
    projects: [
      make("data", "Data-Based Projects", "np-density-georgia", "Modeling Nurse Practitioner Density in Georgia",
        "An interactive dashboard mapping nurse practitioner density across Georgia counties to expose healthcare access disparities tied to race, income, and rurality.",
        ["Python", "Plotly", "Pandas", "U.S. Census Data", "Choropleth Mapping"],
        projNPGeorgia,
        "https://github.com/KultumL/Kultum-s-Personal-Projects/tree/main/Nurse%20Practitioner%20Distribution",
        [
          {
            title: "Overview",
            body: "Georgia has significant healthcare access disparities, and nurse practitioners (NPs) are key primary care providers whose availability varies sharply between counties. This project, completed through the Emory AI.Data Lab in partnership with the Nell Hodgson Woodruff School of Nursing, asked a focused research question: among Georgia counties, how is nurse practitioner density associated with county racial and ethnic composition after adjusting for socioeconomic status and rurality? The goal was to build an interactive, county-level map and dashboard that makes these disparities easy to see and analyze, so that researchers and policymakers can identify where the supply of NPs lines up with population need and where it does not.",
          },
          {
            title: "What I Built",
            body: [
              "I worked with a four-person team to design and build the full pipeline behind the dashboard. We started by importing provider data, including NP counts and physician counts with addresses, then collected racial, ethnic, and income data for every Georgia county from the U.S. Census. I used Python to clean inconsistent county records and standardize county IDs so the provider data could be joined cleanly with Census shapes for mapping.",
              "We built three county-level choropleth maps in Plotly where color encodes NP count, NP density per 10,000 residents, or the doctor-to-NP ratio. The dashboard layers in a rural versus urban county filter, hover tooltips with key statistics, and click-to-open county detail panels that show NP and doctor counts, the doctor-to-NP ratio, median household income, county type, and a racial and ethnic composition donut chart. To evaluate the relationships statistically, I also generated scatterplots with regression lines and correlation coefficients comparing NP density against percent non-white population and median household income.",
            ],
            image: projNPScreenshot6,
          },
          {
            title: "Findings",
            body: [
              "NP density is highly uneven across Georgia counties. Some counties, like DeKalb, have many NPs in absolute terms but only average access once we adjust for population, which is exactly the kind of mismatch the dashboard was designed to surface.",
              "The correlation between percent non-white residents and NP density was weakly positive at roughly 0.23, meaning counties with more non-white residents had a slight tendency toward fewer NPs per capita. The correlation between median household income and NP density was near zero at roughly 0.03, suggesting income alone does not explain where NPs choose to practice. Overall, simple county-level demographics do not strongly predict NP supply, but the interactive maps proved very effective at spotting local mismatches between providers and population, which is the more actionable insight for the partnering nursing school.",
            ],
            image: [projNPScreenshot3,projNPScreenshot2]

          },
        ],
        "https://nursepractitionerdistributiondashboard18.onrender.com/#",
        [projNPGeorgia, projNPScreenshot1,projNPScreenshot7, projNPScreenshot8, projNPScreenshot5]
      ),
      make("data", "Data-Based Projects", "artist-decline", "Modeling Artist Career Decline",
        "A two-stage data mining framework that clusters Spotify artists into eight career archetypes and predicts who will experience a popularity decline next year, catching 92% of real declines on held-out test data.",
        ["Python", "scikit-learn", "Gradient Boosting", "Pandas", "Ward Clustering", "Time-Series CV"],
        projArtistDecline,
        "https://github.com/KultumL/Kultum-s-Personal-Projects/tree/main/Modeling%20and%20Predicting%20Artist%20Career%20Decline%20",
        [
          {
            title: "Overview",
            body: "Spotify assigns every artist a popularity score from 0 to 100 based on real-time streaming behavior across more than 600 million users, and that score moves over time in meaningful ways. Some artists sustain relevance for over a decade while others peak sharply and disappear within two or three years. For talent managers and A&R teams, the intervention window often closes once decline becomes visible, so they need predictive signals rather than reactive ones. This project asks two questions: can we discover meaningful career lifecycle archetypes from longitudinal Spotify data, and can we predict which artists will experience a popularity drop in the following year? It was completed for CS 470 at Emory University with my partner Elizabeth Garcia under Dr. Kai Shu.",
          },
          {
            title: "What I Built",
            body: [
              "Starting from a Kaggle dataset of 32,828 Spotify tracks, I cleaned and deduplicated by track ID, filtered to 1990 through 2020, and required at least three active years per artist so every row had a real trajectory to analyze. That filtering produced 3,474 artist-year profiles across 1,094 artists. I then engineered eleven time-aware features capturing popularity level, trajectory shape (yearly change, career slope, momentum), peak behavior (peak popularity, gap from peak, years since peak), and release activity.",
              "The most important technical decision was preventing data leakage. The original feature code used pandas transform with max, which looked across an artist's entire career including future years, so a 2012 row was effectively seeing the artist's 2019 peak. I replaced this with expanding-window operations so every feature for a given year only uses data from that year or earlier. The fix was painful, since it dropped CV PR-AUC sharply, but it made the evaluation honest. The same principle drove the train-test split (years up to 2016 for training, 2017 onward for testing) so the model only ever predicts forward in time.",
              "Stage one applies Ward linkage agglomerative clustering on eight Z-score standardized career features, with audio features deliberately excluded because they describe musical style rather than career movement. I tested k from 2 through 8 using silhouette scores and selected k = 8 (silhouette = 0.219). Stage two trains four classifiers (Decision Tree, Random Forest, Gradient Boosting, XGBoost) with balanced class weights, expanding-window cross-validation across test years 2013 through 2016, and a decision threshold tuned only on the 2016 validation fold to avoid tuning on the test set.",
            ],
            image: projArtistFig9
          },
          {
            title: "Results",
            body: [
              "Stage one discovered eight statistically distinct career archetypes (chi-square = 109.94, p < 0.0001, Cramer's V = 0.178) with decline rates ranging from 16 percent for Catalog Risers up to 53 percent for Legacy Faders. The most actionable group is Momentum Lost, artists like The Weeknd and Ariana Grande who reached real peaks but now show the most negative momentum of any cluster, making them identifiable before decline accelerates.",
              "Stage two selected Gradient Boosting at a tuned threshold of 0.369, which achieved 92.0 percent recall on the held-out test set (95% CI: 87.5 to 96.2), catching 127 of 138 real decline cases. The trade-off was 3.9 false alarms per correct detection, which is suited for narrowing a watchlist rather than replacing human judgment. A rule-based baseline that simply flagged artists with negative yearly change scored 0.157 PR-AUC, below the random baseline of 0.165, which confirmed that naive momentum heuristics do not work and the machine learning was adding genuine signal.",
            ],
            image: [projArtistFig1, projArtistFig7, projArtistFig8],
          },
          {
            title: "Key Findings",
            body: [
              "Current popularity and recent yearly change dominate prediction. Mean popularity carries a permutation importance of 0.112 on the test set, with yearly change at 0.045, and an ablation to just those two features drops PR-AUC only from 0.299 to 0.281. Sixteen of eighteen engineered features add only marginal value beyond those two.",
              "The error analysis revealed a structural limitation: Low Current Visibility artists like Erykah Badu have the highest miss rate (5.6 percent) because their popularity scores sit so low that the model never crosses its decision boundary, regardless of trajectory. Meanwhile, Established High-Performers and Mainstream Stable artists generate most of the false positives because rising momentum and pre-crash volatility look nearly identical in Spotify data alone.",
              "Spotify popularity scores impose a hard ceiling on prediction. Off-platform events like label changes, controversies, tours, and comebacks are invisible to any feature derivable from streaming data, so further gains require external signals rather than smarter models. The framework demonstrates that predictive signal exists for decline detection, but the data ceiling is the real constraint going forward.",
            ],
          },
        ],
        undefined,                                                                              // demo (no live site)
        [projArtistDecline, projArtistFig1, projArtistFig2, projArtistFig3, projArtistFig6, projArtistFig7],
        undefined,                                                                              // imageAspect
        "/project_report.pdf"                                                                   // paper
      ),
    ],
  },
  {
    id: "hci",
    label: "03 / Human-Computer Interaction",
    title: "Human-Computer Interaction",
    projects: [
      make("hci", "Human-Computer Interaction", "almighty", "Almighty",
        "A prototype of a fitness social app for Emory students to find workout partners, join group events, share progress, and plan sessions through a calendar, designed across three prototype stages with 30 user interviews.",
        ["Figma", "Balsamiq", "UX Research", "Prototyping"],
        projAlmighty,
        "",
        [
          {
            title: "Overview",
            body: "Almighty is a prototype for a mobile fitness app designed to solve a specific problem among Emory University students: working out alone is intimidating, and there is no centralized way to find partners, discover informal fitness groups, or stay consistent. The app connects users through four core features: a partner matching system modeled on swipe mechanics, a group and event discovery hub, a social feed for sharing workout posts, and a calendar for planning sessions with partners or groups. Almighty was designed through a full user-centered design process, beginning with observations at campus gyms and progressing through sketched storyboards, Balsamiq wireframes, and two iterations of a high-fidelity Figma prototype, with feedback collected across more than 30 interviews and usability sessions.",
          },
          {
            title: "What I Built",
            body: [
              "I was responsible for the matching and messaging features across all three prototype stages. For matching, I designed the swipe-based partner discovery flow where users are shown profiles filtered by shared fitness interests and gym schedule overlap. Each profile card surfaces common interests and typical gym hours so users can make an informed decision before connecting.",
              "For messaging, I designed both the individual and group chat views. The inbox organizes conversations into active chats, a waiting-for-response queue with a 12-hour countdown, and group activity threads, so users always know where a conversation stands. Group chats are tied directly to fitness groups and events, making coordination feel natural rather than pulled out of context.",
              "Across the two hi-fi iterations I refined the matching access point after usability tests showed users were confused about how to reach it. I consolidated the entry into a single connections tab that surfaces both partner matching and group joining together, which reduced navigation friction noticeably in the second round of testing.",
            ],
          },
          {
            title: "Lo-Fi Prototype",
            image: [projLoFi1, projLoFi2],
          },
          {
            title: "Mid-Fi Prototype",
            image: projMidFi,
          },
          {
            title: "Hi-Fi Prototype",
            image: [projHiFi1, projHiFi2, projHiFi3],
          },
        ],
        undefined,
        [projAlmighty, projLoFi1, projLoFi2, projMidFi, projHiFi1, projHiFi2, projHiFi3],
        "portrait",
        undefined,
        "https://www.figma.com/proto/CgukF5fKNY3nwgpPiIqrEx/Matching?node-id=579-8815&t=eOKqPCx0j7x1Hu0a-1"
      ),
      make("hci", "Human-Computer Interaction", "tailorme", "TailorMe",
        "An auto-tailoring belt prototype that lets you resize a pair of jeans at home without sewing skills, designed for curvy women who struggle to find jeans that fit both their waist and legs.",
        ["Arduino", "Wearable Tech", "Physical Computing", "Embroidery", "Prototyping"],
        projTailorMe,
        "",
        [
          {
            title: "Overview",
            body: "TailorMe is a wearable prototype that reimagines tailoring as something you can do yourself in minutes instead of paying $20 to $30 at a tailor. The belt is designed to wrap around a pair of jeans at the spot that needs adjusting. The user presses a start button and the belt tightens to the desired fit. When they press stop, a red LED lights up to confirm the position is locked, then a small motorized blade trims the excess fabric and a built-in stitching component closes the loose edge. The core problem behind the project is that curvy women, especially curvy Black women, often buy jeans that fit their legs but gap or pinch at the waist, and that mismatch turns every new pair into either a tailoring bill or a piece of clothing that never quite fits.",
          },
          {
            title: "What I Built",
            body: [
              "I built a working physical prototype of the belt that demonstrates the core interaction: a button press triggers a status LED and activates a servo motor representing the cutting and stitching motion. The hardware is built around an Arduino Nano, with LEDs, push buttons, and a servo motor wired through a breadboard. I programmed the full interaction in the Arduino IDE so that pressing the button changes the LED status and drives the servo through a half-turn that simulates the chopping and sewing motion.",
              "For the physical body of the belt, I used cardstock as the structural base and stitched together scraps of fabric in a custom pattern using a Brother embroidery machine. I wrapped the embroidered fabric around the cardstock and bonded it with fabric glue, then mounted the servo motor and electronics to the belt using a hot glue gun so the wiring stayed exposed and demonstrable for the prototype walkthrough.",
            ],
          },
          {
            title: "Ideations",
            image: [projTailorIdea1, projTailorIdea2],
          },
          {
            title: "Production",
            image: [projTailorProd1, projTailorProd2,projTailorProd3],
          },
        ],
        undefined,
        [projTailorMe, projTailorIdea1, projTailorIdea2, projTailorProd1, projTailorProd2,projTailorProd3],
        "portrait"
      ),
    ],
  },
];

export const allProjects: Project[] = groups.flatMap((g) => g.projects);

export function getProject(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}
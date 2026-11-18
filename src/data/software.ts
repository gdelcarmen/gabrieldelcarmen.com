import type { DetailedEntry } from './research';

export const software: DetailedEntry[] = [
  {
    id: 'e-surgicai',
    name: 'SurgicAI LLC',
    summary:
      '(founder and principal architect, May 2025 to present). Physician-founded startup developing point-of-care tools for surgical practice, built and validated to the evidentiary bar of clinical practice.',
    detailHeading: 'Founder and Principal Architect · May 2025 to present',
    detail: [
      'Established a design standard that tools are built and validated to the evidentiary bar of clinical practice.',
      'Portfolio spans institutional decision support, ambient clinical documentation, and point-of-care reference and tracking.',
      'Serves as architect and specification lead while directing autonomous coding agents through implementation.',
    ],
  },
  {
    id: 'e-marcus',
    name: 'MARCUS',
    summary:
      '(creator, architect and principal developer, May 2025 to present). Multi-tenant retrieval-augmented clinical knowledge platform for institution-specific guidelines, protocols, and reference material. Hybrid retrieval with pgvector and PostgreSQL full-text search; Next.js and FastAPI.',
    detailHeading:
      'Clinical Knowledge and Decision Platform · Creator, Architect, Principal Developer · May 2025 to present',
    detail: [
      'Architected hybrid retrieval with pgvector dense vector search, PostgreSQL full-text search, reciprocal-rank fusion, cross-encoder ranking, and semantic caching.',
      'Engineered a Next.js and FastAPI monorepo with SSE streaming, role-based multi-tenant access control, and end-to-end suite testing.',
      'Designed to answer clinicians’ natural-language questions at the point of care.',
    ],
  },
  {
    id: 'e-tpmg',
    name: 'Trauma Practice Management Guidelines',
    summary:
      '(creator and developer, October 2025). SwiftUI application centralizing Albany Medical Center trauma practice management guidelines into a searchable, offline-capable reference.',
    detailHeading: 'Creator and Developer · October 2025',
    detail: [
      'Designed for quick bedside retrieval with clear sectioning.',
      'Built with SwiftUI and Xcode from institution-sourced practice management guidelines in collaboration with Dr. Kurt Edwards.',
    ],
  },
  {
    id: 'e-drainbow',
    name: 'DrainBow',
    summary:
      '(creator and developer, July 2026). Native iOS application that captures bedside photos of surgical drain output, performs on-device color detection, and logs output volume by drain.',
    detailHeading: 'Creator and Developer · July 2026',
    detail: [
      'Builds a rainbow visualization plotting drain-output color over time alongside volume entries.',
      'Surfaces trend shifts for clinical monitoring.',
    ],
  },
];


import { CSSProperties, ReactNode } from 'react';

export interface CommonProps {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

export enum VISAS {
  B1 = 'business-visitor',
  B2 = 'tourist-visitor',
  F1 = 'student',
  F1_OPT = 'optional-practical-training',
  F1_CPT = 'curricular-practical-training',
  J1 = 'exchange-visitor',
  H1B = 'specialty-occupation-worker',
  H1B1 = 'specialty-occupation-worker-chile-singapore',
  H2A = 'temporary-agricultural-worker',
  H2B = 'temporary-non-agricultural-worker',
}

export type ApiResponse = {
  message: string;
  statusCode: number;
  success: boolean;
  responseObject: any;
};

export type PublicLeadForm = {
  firstName: string;
  lastName: string;
  email: string;
  linkedin: string;
  visas: string[];
  resume: File;
  additionalInfo?: string;
};

export type SubmittedForm = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  linkedin: string;
  visas: string[];
  additionalInfo: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
  __v: number;
}

export type Lead = {
  _id: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
}


export type LoginForm = {
  username: string;
  password: string;
};

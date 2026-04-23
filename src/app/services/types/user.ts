// Based on your Swagger DTOs
export interface RegisterDto {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  bio?: string;
  profilePictureUrl?: string;
  role: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface PostProjectDto {
  title: string;
  description: string;
  budget: number;
  deadline: string;
  requiredSkills?: string;
  milestones?: MilestoneDto[];
}

export interface MilestoneDto {
  title?: string;
  description?: string;
  amount: number;
  deadline: string;
}

export interface AddProposalDto {
  projectId: number;
  proposedPrice: number;
  deliveryDays: number;
  coverLetter: string;
}

export interface SubmitWorkDto {
  projectId: number;
  milestoneId: number;
  fileUrls: string;
  message?: string;
}

// Add other DTOs as needed
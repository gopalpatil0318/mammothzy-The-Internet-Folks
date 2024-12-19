export type ActivityFormData = {
    activityName: string;
    category: string;
    otherCategory?: string;
    description: string;
    activityType: 'indoor' | 'outdoor' | 'virtual';
    locationType: 'provider' | 'user';
    minMembers: string;
    maxMembers: string;
    addressLine1: string;
    addressLine2?: string;
    zipCode: string;
    city: string;
    state: string;
    contactNumber: string;
    contactName: string;
  }
  
  export type FormStep = 'activity' | 'location';
  
  
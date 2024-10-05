export interface Item {
    title: string;
    description: string;
    url: string;
    requiresVpn: boolean;
    type: "url" | "telegram";
  }
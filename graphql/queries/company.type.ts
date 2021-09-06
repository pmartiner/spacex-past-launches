export type Address = {
  address?: string;
  city?: string;
  state?: string;
}

export type InfoLinks = {
  elon_twitter?: string;
  flickr?: string;
  twitter?: string;
  website?: string;
}

export type CompanyResponseType = {
  ceo?: string;
  coo?: string;
  cto_propulsion?: string;
  cto?: string;
  employees?: number;
  founded?: number;
  founder?: string;
  headquarters?: Address
  launch_sites?: number;
  links?: InfoLinks;
  name?: string;
  summary?: string;
  test_sites?: number;
  valuation?: number;
  vehicles?: number;
};
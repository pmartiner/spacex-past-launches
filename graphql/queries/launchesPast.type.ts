export type ID = number | string;

export type LaunchSite = {
  site_id?: string;
  site_name_long?: string;
  site_name?: string;
}

export type LaunchLinks = {
  article_link?: string;
  flickr_images?: string[];
  mission_patch_small?: string;
  mission_patch?: string;
  presskit?: string;
  reddit_campaign?: string;
  reddit_launch?: string;
  reddit_media?: string;
  reddit_recovery?: string;
  video_link?: string;
  wikipedia?: string;
}

export type LaunchRocketFairings = {
  recovered?: boolean;
  recovery_attempt?: boolean;
  reused?: boolean;
  ship?: string;
}

export type CapsuleMission = {
  flight?: number;
  name?: string;
}

export type Core = {
  asds_attempts?: number;
  asds_landings?: number;
  block?: number;
  id?: ID;
  missions?: CapsuleMission[];
  original_launch?: string;
  reuse_count?: number;
  rtls_attempts?: number;
  rtls_landings?: number;
  status?: string;
  water_landing?: boolean;
}

export type LaunchRocketFirstStageCore = {
  block?: number;
  core?: Core;
  flight?: number;
  gridfins?: boolean;
  land_success?: boolean;
  landing_intent?: boolean;
  landing_type?: string;
  landing_vehicle?: string;
  legs?: boolean;
  reused?: boolean;
}

export type LaunchRocketFirstStage = {
  cores?: LaunchRocketFirstStageCore[];
}

export type Distance = {
  feet?: number;
  meters?: number;
}

export type Force = {
  kN?: number;
  lbf?: number;
}

export type RocketEngines = {
  number?: number;
  type?: string;
  version?: string;
  layout?: string;
  engine_loss_max?: string;
  propellant_1?: string;
  propellant_2?: string;
  thrust_sea_level?: Force;
  thrust_vacuum?: Force;
  thrust_to_weight?: number;
}

export type RocketFirstStage = {
  burn_time_sec?: number;
  engines?: number;
  fuel_amount_tons?: number;
  reusable?: boolean;
  thrust_sea_level?: Force;
  thrust_vacuum?: Force;
}

export type RocketLandingLegs = {
  number?: number;
  material?: string;
}

export type Mass = {
  kg?: number;
  lb?: number;
}

export type RocketPayloadWeight = {
  id?: string;
  kg?: number;
  lb?: number;
  name?: string;
}

export type RocketSecondStagePayloadCompositeFairing = {
  height?: Distance;
  diameter?: Distance;
}

export type RocketSecondStagePayloads = {
  option_1?: string;
  composite_fairing?: RocketSecondStagePayloadCompositeFairing;
}

export type RocketSecondStage = {
  burn_time_sec?: number;
  engines?: number;
  fuel_amount_tons?: number;
  payloads?: RocketSecondStagePayloads
  thrust?: Force;
}

export type Rocket = {
  active?: boolean;
  boosters?: number;
  company?: string;
  cost_per_launch?: number;
  country?: string;
  description?: string;
  diameter?: Distance
  engines?: RocketEngines
  first_flight?: string;
  first_stage?: RocketFirstStage;
  height?: Distance;
  id?: ID;
  landing_legs?: RocketLandingLegs;
  mass?: Mass;
  name?: string;
  payload_weights?: RocketPayloadWeight[];
  second_stage?: RocketSecondStage;
  stages?: number;
  success_rate_pct?: number;
  type?: string;
  wikipedia?: string;
}

export type PayloadOrbitParams = {
  apoapsis_km?: number;
  arg_of_pericenter?: number;
  eccentricity?: number;
  epoch?: string;
  inclination_deg?: number;
  lifespan_years?: number;
  longitude?: number;
  mean_anomaly?: number;
  mean_motion?: number;
  periapsis_km?: number;
  period_min?: number;
  raan?: number;
  reference_system?: string;
  regime?: string;
  semi_major_axis_km?: number;
}

export type Payload = {
  customers?: string[];
  id?: ID;
  manufacturer?: string;
  nationality?: string;
  norad_id?: number[];
  orbit_params?: PayloadOrbitParams;
  orbit?: string;
  payload_mass_kg?: number;
  payload_mass_lbs?: number;
  payload_type?: string;
  reused?: boolean;
}

export type LaunchRocketSecondStage = {
  block?: number;
  payloads?: [Payload]
}

export type LaunchRocket = {
  fairings?: LaunchRocketFairings;
  first_stage?: LaunchRocketFirstStage;
  rocket_name?: string;
  rocket_type?: string;
  rocket?: Rocket
  second_stage?: LaunchRocketSecondStage;
}

export type LaunchTelemetry = {
  flight_club?: string;
}

export type ShipMission = {
  flight?: string;
  name?: string;
}

export type ShipLocation = {
  latitude?: number;
  longitude?: number;
}

export type Ship = {
  abs?: number;
  active?: boolean;
  attempted_landings?: number;
  class?: number;
  course_deg?: number;
  home_port?: string;
  id?: ID;
  image?: string;
  imo?: number;
  missions?: ShipMission[];
  mmsi?: number;
  model?: string;
  name?: string;
  position?: ShipLocation;
  roles?: string[];
  speed_kn?: string;
  status?: string;
  successful_landings?: number;
  type?: string;
  url?: string;
  weight_kg?: number;
  weight_lbs?: number;
  year_built?: number;
}

export type LaunchesPastResponseType = {
  details?: string;
  id?: ID;
  is_tentative?: string;
  launch_date_local?: string;
  launch_date_unix?: string;
  launch_date_utc?: string;
  launch_site?: LaunchSite;
  launch_success?: boolean;
  launch_year?: string;
  links?: LaunchLinks;
  mission_id?: string[];
  mission_name?: string;
  rocket?: LaunchRocket
  static_fire_date_unix?: string;
  static_fire_date_utc?: string;
  telemetry?: LaunchTelemetry;
  tentative_max_precision?: string;
  upcoming?: string;
  ships?: Ship[];
}
export interface Building {
  AangebodenSinds: string;
  AangebodenSindsTekst: string;
  AantalBadkamers: number;
  AantalKamers: number;
  AantalSlaapkamers?: null;
  AantalWoonlagen: string;
  Aanvaarding: string;
  Adres: string;
  AfgekochtDatum: string;
  BalkonDakterras?: null;
  BedrijfsruimteCombinatieObject?: null;
  BezichtingDagdelen?: BezichtingDagdelenEntityOrBezichtingDagenEntity[];
  BezichtingDagen?: BezichtingDagdelenEntityOrBezichtingDagenEntity[];
  BijdrageVVE?: null;
  Bijzonderheden: string;
  Bouwjaar: string;
  Bouwvorm: string;
  BronCode: string;
  ContactpersoonEmail: string;
  ContactpersoonTelefoon: string;
  Cv: string;
  DatumOndertekeningAkte?: null;
  Deeplink?: null;
  DetailInfo: DetailInfo;
  EigendomsSituatie: string;
  Energielabel: Energielabel;
  ErfpachtBedrag: number;
  Garage?: null;
  GarageIsolatie?: null;
  GarageVoorzieningen?: null;
  GelegenOp?: null;
  GewijzigdDatum: string;
  HoofdFoto: string;
  HoofdFotoSecure: string;
  HoofdTuinType: string;
  Id: number;
  IndBasisPlaatsing: boolean;
  IndFotos: boolean;
  IndIpix: boolean;
  IndOpenhuizenTopper: boolean;
  IndPDF: boolean;
  IndPlattegrond: boolean;
  IndTop: boolean;
  IndVeilingProduct: boolean;
  IndVideo: boolean;
  Inhoud: number;
  InternalId: string;
  IsIngetrokken: boolean;
  IsVerhuurd: boolean;
  IsVerkocht: boolean;
  Isolatie: string;
  Kenmerken?: KenmerkenEntity[];
  KenmerkenKort: KenmerkenKort;
  KenmerkenTitel?: null;
  Ligging: string;
  MLIUrl: string;
  Makelaar: string;
  MakelaarId: number;
  MakelaarTelefoon: string;
  MedeAanbieders?: null[];
  Media: MediaEntity[];
  "Media-Foto"?: string[];
  MobileURL: string;
  ObjectType: string;
  ObjectTypeMetVoorvoegsel: string;
  OpenHuizen?: null[];
  PerceelOppervlakte: number;
  PermanenteBewoning: string;
  Plaats: string;
  Postcode: string;
  Prijs: Prijs;
  PrijsGeformatteerd: string;
  Project?: null;
  ProjectNaam?: null;
  PublicatieDatum: string;
  PublicatieStatus: number;
  SchuurBerging: string;
  SchuurBergingIsolatie?: null;
  SchuurBergingVoorzieningen: string;
  ScrambledId: string;
  ServiceKosten: number;
  SoortAanbod: number;
  SoortDak: string;
  SoortGarage: string;
  SoortParkeergelegenheid: string;
  SoortPlaatsing: number;
  SoortWoning: string;
  Titels?: TitelsEntity[];
  ToonBezichtigingMaken: boolean;
  ToonBrochureAanvraag: boolean;
  ToonMakelaarWoningaanbod: boolean;
  ToonReageren: boolean;
  TransactieAfmeldDatum?: null;
  TransactieMakelaarId?: null;
  TransactieMakelaarNaam?: null;
  TuinLigging: string;
  TypeProject: number;
  URL: string;
  Veiling: Veiling;
  VerkoopStatus: string;
  Verwarming: string;
  Video: Video;
  VolledigeOmschrijving: string;
  Voorzieningen: string;
  WGS84_X: number;
  WGS84_Y: number;
  WarmWater: string;
  WoonOppervlakte: number;
  EersteHuurPrijs?: null;
  EersteHuurPrijsLang?: null;
  EersteKoopPrijs?: null;
  EersteKoopPrijsLang?: null;
  HuurPrijs?: null;
  HuurPrijsLang?: null;
  HuurPrijsTot?: null;
  Huurprijs?: null;
  HuurprijsFormaat?: null;
  KoopPrijs: number;
  KoopPrijsLang: string;
  Koopprijs: number;
  KoopprijsFormaat: string;
  KoopprijsTot?: null;
  ShortURL: string;
  Tuin: string;
  VeilingGeformatteerd?: null;
}

export interface BezichtingDagdelenEntityOrBezichtingDagenEntity {
  Naam: string;
  Waarde: string;
}

export interface DetailInfo {
  HasPromotionLabel: boolean;
  PromotionLabelType: number;
  RibbonColor: number;
  RibbonText?: null;
  Tagline?: null;
}

export interface Energielabel {
  Definitief: boolean;
  Index?: null;
  Label: string;
  NietBeschikbaar: boolean;
  NietVerplicht: boolean;
}

export interface KenmerkenEntity {
  Ad?: null;
  Kenmerken?: KenmerkenEntity[];
  LokNummer: number;
  SubKenmerk?: SubKenmerk;
  Titel: string;
}

export interface KenmerkenEntity {
  Naam: string;
  NaamCss?: string;
  Waarde: string;
  WaardeCss?: string;
}

export interface SubKenmerk {
  Ad: string;
  Kenmerken?: null[];
  LokNummer: number;
  SubKenmerk?: null;
  Titel: string;
}
export interface KenmerkenKort {
  Ad?: null;
  Kenmerken?: KenmerkenEntity[];
  LokNummer: number;
  SubKenmerk?: null;
  Titel?: null;
}

export interface MediaEntity {
  Categorie: number;
  ContentType: number;
  Id: string;
  IndexNumber: number;
  MediaItems: MediaItemsEntity[];
  Metadata?: string;
  Omschrijving?: string;
  RegistratieVerplicht: boolean;
  Soort: number;
}

export interface MediaItemsEntity {
  Category: number;
  Height: number;
  Url: string;
  UrlSecure?: string;
  Width: number;
}

export interface Prijs {
  GeenExtraKosten?: null;
  HuurAbbreviation: string;
  Huurprijs?: null;
  HuurprijsOpAanvraag: string;
  HuurprijsTot?: null;
  KoopAbbreviation: string;
  Koopprijs: number;
  KoopprijsOpAanvraag: string;
  KoopprijsTot?: null;
  OriginelePrijs?: null;
  VeilingText: string;
}

export interface TitelsEntity {
  Omschrijving: string;
  Pagina: number;
}

export interface Veiling {
  EindDatum?: null;
  Link?: null;
  StartDatum?: null;
  VeilingPartij?: null;
}

export interface Video {
  ImageUrl: string;
  QuadiaVideoId: number;
  ThumbnailUrl: string;
  Videos?: VideosEntity[];
}

export interface VideosEntity {
  BitRate: number;
  Cdns?: CdnsEntity[];
  HasAudio: boolean;
  HasVideo: boolean;
  IsSource: boolean;
  Stream: Stream;
  Url: string;
}

export interface CdnsEntity {
  DeliveryType: string;
  FileType?: null;
  MimeType: string;
  SslUrl?: null;
  Url: string;
}

export interface Stream {
  AverageBitRate: number;
  Height: number;
  Width: number;
}

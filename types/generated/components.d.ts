import type { Schema, Struct } from '@strapi/strapi';

export interface GeneralAboutCompany extends Struct.ComponentSchema {
  collectionName: 'components_general_about_companies';
  info: {
    displayName: 'aboutCompany';
  };
  attributes: {
    aboutCompanyText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    imageDescriptionText: Schema.Attribute.String;
    imageText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface GeneralContentSide extends Struct.ComponentSchema {
  collectionName: 'components_general_content_sides';
  info: {
    description: '';
    displayName: 'contentSide';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    content: Schema.Attribute.RichText;
    contentSide: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'right'>;
    contentTitleLine1: Schema.Attribute.String;
    contentTitleLine2: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    sectionId: Schema.Attribute.String;
  };
}

export interface GeneralGetConsultations extends Struct.ComponentSchema {
  collectionName: 'components_general_get_consultations';
  info: {
    description: '';
    displayName: 'getConsultations';
  };
  attributes: {
    callToAction: Schema.Attribute.String;
    callToActionUrl: Schema.Attribute.String;
    content: Schema.Attribute.RichText;
    getConsultationsText: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface GeneralImageWithLink extends Struct.ComponentSchema {
  collectionName: 'components_general_image_with_links';
  info: {
    displayName: 'ImageWithLink';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageLink: Schema.Attribute.String;
  };
}

export interface GeneralOffertCard extends Struct.ComponentSchema {
  collectionName: 'components_general_offert_cards';
  info: {
    displayName: 'offertCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    linkText: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface GeneralProjects extends Struct.ComponentSchema {
  collectionName: 'components_general_projects';
  info: {
    displayName: 'projects';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Component<'general.image-with-link', true>;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface GeneralSlideshow extends Struct.ComponentSchema {
  collectionName: 'components_general_slideshows';
  info: {
    description: '';
    displayName: 'Slideshow';
  };
  attributes: {
    callToAction: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    subHeading: Schema.Attribute.String;
  };
}

export interface GeneralTeam extends Struct.ComponentSchema {
  collectionName: 'components_general_teams';
  info: {
    displayName: 'team';
  };
  attributes: {
    heading: Schema.Attribute.String;
    teamCard: Schema.Attribute.Component<'general.team-card', true>;
    teamText: Schema.Attribute.String;
  };
}

export interface GeneralTeamCard extends Struct.ComponentSchema {
  collectionName: 'components_general_team_cards';
  info: {
    displayName: 'teamCard';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    lastname: Schema.Attribute.String;
    memberLink: Schema.Attribute.String;
    name: Schema.Attribute.String;
    position: Schema.Attribute.String;
  };
}

export interface GeneralTestimonialCard extends Struct.ComponentSchema {
  collectionName: 'components_general_testimonial_cards';
  info: {
    displayName: 'testimonialCard';
  };
  attributes: {
    client: Schema.Attribute.String;
    clientPosition: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    message: Schema.Attribute.Text;
  };
}

export interface GeneralTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_general_testimonials';
  info: {
    displayName: 'testimonials';
  };
  attributes: {
    heading: Schema.Attribute.String;
    testimonialsCard: Schema.Attribute.Component<
      'general.testimonial-card',
      true
    >;
    testimonialsText: Schema.Attribute.String;
  };
}

export interface GeneralTopHeader extends Struct.ComponentSchema {
  collectionName: 'components_general_top_headers';
  info: {
    displayName: 'TopHeader';
    icon: 'bulletList';
  };
  attributes: {
    mainText: Schema.Attribute.String;
    workingDays: Schema.Attribute.String;
  };
}

export interface GeneralWhatWeOffer extends Struct.ComponentSchema {
  collectionName: 'components_general_what_we_offers';
  info: {
    description: '';
    displayName: 'whatWeOffer';
  };
  attributes: {
    heading: Schema.Attribute.String;
    offerCard: Schema.Attribute.Component<'general.offert-card', true>;
    subheading: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'general.about-company': GeneralAboutCompany;
      'general.content-side': GeneralContentSide;
      'general.get-consultations': GeneralGetConsultations;
      'general.image-with-link': GeneralImageWithLink;
      'general.offert-card': GeneralOffertCard;
      'general.projects': GeneralProjects;
      'general.slideshow': GeneralSlideshow;
      'general.team': GeneralTeam;
      'general.team-card': GeneralTeamCard;
      'general.testimonial-card': GeneralTestimonialCard;
      'general.testimonials': GeneralTestimonials;
      'general.top-header': GeneralTopHeader;
      'general.what-we-offer': GeneralWhatWeOffer;
    }
  }
}

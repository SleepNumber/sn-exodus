import Enumify from './enumify';

/**
 * Cookie names used by us.
 * @enum
 */
class Cookie extends Enumify {
  static access_token = new Cookie('access_token');
  static analytics_session = new Cookie('analytics_session');
  static auth_token = new Cookie('authentication_token');
  static bq_auto_lead_send = new Cookie('bq_auto_lead_send');
  static cart = new Cookie('order_id');
  static ccpa = new Cookie('sn-ccpa-optin');
  static debug = new Cookie('sn-debug');
  static dynamic_yield_id_server = new Cookie('_dyid_server');
  static dynamic_yield_id = new Cookie('_dyid'); // This client cookie must match _dyid_server
  static dynamic_yield_jsession = new Cookie('_dyjsession');
  static id_token = new Cookie('id_token');
  static log_ignores = new Cookie('sn_log_ignores');
  static price_lists = new Cookie('plid');
  static pa_priv_shown= new Cookie('pa_priv_shown');
  static promo_drawer = new Cookie('promo_drawer');
  static refresh_token = new Cookie('refresh_token');
  static request_names = new Cookie('request_names'); // Set by rails if user is missing names
  static session = new Cookie('_sleep_number_session');
  static sessions = new Cookie('sessions');
  static suppress_chat = new Cookie('suppress_chat');
  static sn = new Cookie('sn');
  static _ = this.closeEnum();

  constructor(name) {
    super();

    this.name = name;
  }
}

export default Cookie;

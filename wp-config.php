<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '=TkKA:5jV[ToD($-]MwJ5G+&{YB^Q~QFJ#J_,p,Vpi+CQCH l}/a..W{2JRa:)7,' );
define( 'SECURE_AUTH_KEY',  'L5(RoJIwI(Yne?RDv>9n~Ymo;Kk{5akT/PiwR9QL*(h~F%jm~(wt,V1<hzv?7<UG' );
define( 'LOGGED_IN_KEY',    '+FqHiP%-$}$IH[7-?|.E,8F7`CP-{VgzYIVS.IdL(qWX&+hlG]<:ljGr&7<E5X6.' );
define( 'NONCE_KEY',        'BZ,OH#.-X/_M}**p3Ks1E}/cv|$JnlNo_Ym ZU(/>#4dQ>De:$ZZcFC9OZtPcVZO' );
define( 'AUTH_SALT',        '@*A7g[%?6s-Jgi~c}ItNUA`e@Exltn@? m+>^eMTZj_4>A$[Wze^H@re$C$K-5sZ' );
define( 'SECURE_AUTH_SALT', ':b4`OR~My6!`mzJ`-l&7Xf%Dil_|{?][;m25vS;DQ{sQ&O,_,EnxyJ2DQ6PJ (kl' );
define( 'LOGGED_IN_SALT',   ':BZ(T({<wlZgGlv;:>)lR|Mzm7xBxhls_P/)mdXP7?],seANwDO&GS4s1aIyHnqD' );
define( 'NONCE_SALT',       'Lf9cG4EU:]B~Z5Y/lESxoT0`_Ng+9$a+Z9(m82&2,vu*<;/Nc5%?E>gP0n)rFmn*' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', true );

/* Add any custom values between this line and the "stop editing" line. */

define( 'SCRIPT_DEBUG', true );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

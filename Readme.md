This is a Flarum extension that integrates [Keybase's proof integration](https://keybase.io/blog/keybase-proofs-for-mastodon-and-everyone).

## Installation

Install via Composer:

```bash
composer require bkolobara/flarum-keybase
```

## Setup

### 1. Run Migration

After installation or upgrade, run the migration to set up the database:

```bash
php flarum migrate
```

### 2. Configure Cron Job (Required)

To automatically validate Keybase proofs and remove expired ones, set up a cron job to run the validation command periodically.

Edit your crontab:

```bash
crontab -e
```

Add the following line to run validation daily at 3:00 AM:

```cron
0 3 * * * cd /path/to/your/flarum && php flarum keybase:validate-proofs >> /var/log/keybase-validation.log 2>&1
```

**Important:** Replace `/path/to/your/flarum` with the actual path to your Flarum installation.

#### Alternative Schedules

- **Twice daily (3 AM and 3 PM):**

  ```cron
  0 3,15 * * * cd /path/to/your/flarum && php flarum keybase:validate-proofs >> /var/log/keybase-validation.log 2>&1
  ```

- **Once a week (Sunday at 3 AM):**
  ```cron
  0 3 * * 0 cd /path/to/your/flarum && php flarum keybase:validate-proofs >> /var/log/keybase-validation.log 2>&1
  ```

### 3. Manual Validation (Optional)

You can manually validate proofs at any time:

```bash
php flarum keybase:validate-proofs
```

This will check all active proofs against the Keybase API and delete any that are invalid or expired.

## Features

- Users can link their Keybase identity to their Flarum profile
- Keybase proof verification via Keybase API
- Display verified Keybase usernames on user profiles
- Automatic proof validation and cleanup via cron job
- Optional automatic group assignment for verified users

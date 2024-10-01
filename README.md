# Canadian Armed Forces (CAF) Ranks
Current Version: v0.4.0

Ranks in the Canadian Armed Forces mark a person's position in its hierarchical structure. As people gain more responsibility and authority, they earn promotions in rank.

## Purpose

I created this project because the dataset that is available on the [Open Government Portal](https://open.canada.ca/data/en/dataset/a503f0de-b081-4b8f-ae69-651f8c95d676) are insufficient for advanced programatic consumption. The dataset is insufficient for the following reasons:

1. CSV files cannot be easily consumed by various programming environments compared to JSON;
2. the datasets have string formatting issues (extra/missing spaces);
3. the dataset has been split into seperate files for English and French versions; and
4. the dataset dosn't include the RCN gender neutral nomenclature change.

The caf-ranks project solves these issues and provides the dataset in a single JSON file.

## [caf-ranks.json](caf-ranks.json)
This is a complete list of ranks within the Canadian Armed Forces (CAF). It includes both English and French versions of each rank. A minified version of this dataset exists as [caf-ranks.min.json](caf-ranks.min.json) after running `python3 minify.py`.

### Rank Object Keys
- `level`: The rank level. Multiple ranks will share a level, only seperated by element. 
- `title`: The full rank title
    - `en`: English text
    - `fr`: French text
- `abbreviation`: The rank abbreviation
    - `en`: English text
    - `fr`: French text
- `category`: The category of the rank
    - `en`: English text
    - `fr`: French text
- `element`: A list of CAF elements that use the rank (Options: CA, RCAF, RCN)

## License

This project is licensed under the [Open Government Licence - Canada 2.0](https://open.canada.ca/en/open-government-licence-canada)

See [LICENSE.md](LICENSE.md)

## Sources

- Tables found on [Military Ranks - Canada.ca](https://www.canada.ca/en/services/defence/caf/military-identity-system/rank-appointment-insignia.html) ([2023-08-30](https://web.archive.org/web/20230913233331/https://www.canada.ca/en/services/defence/caf/military-identity-system/rank-appointment-insignia.html))
- Tables found on [Grades militaires - Canada.ca](https://www.canada.ca/fr/services/defense/fac/systeme-identite-militaire/insignes-grade-fonction.html) ([2023-08-30](https://web.archive.org/web/20230930204703/https://www.canada.ca/fr/services/defense/fac/systeme-identite-militaire/insignes-grade-fonction.html))
- CSV files found on [Rank Appointment Insignia - Open Government Portal](https://open.canada.ca/data/en/dataset/a503f0de-b081-4b8f-ae69-651f8c95d676)

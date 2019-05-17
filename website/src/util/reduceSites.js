import shortid from 'shortid';

export const reduceSites = sites => {
  return sites.reduce((prev, curr) => {
    if (prev.length === 0) {
      return [
        {
          parish: curr.parish,
          sites: [
            {
              id: shortid.generate(),
              name: curr.name,
              location: curr.location,
            },
          ],
        },
      ];
    }

    if (prev.find(a => a.parish === curr.parish)) {
      return [
        ...prev.map(a => {
          if (a.parish === curr.parish) {
            return {
              ...a,
              sites: [
                ...a.sites,
                {
                  id: shortid.generate(),
                  name: curr.name,
                  location: curr.location,
                },
              ],
            };
          }

          return a;
        }),
      ];
    }

    return [
      ...prev,
      {
        parish: curr.parish,
        sites: [
          {
            id: shortid.generate(),
            name: curr.name,
            location: curr.location,
          },
        ],
      },
    ];
  }, []);
};

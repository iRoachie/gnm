export const reduceSites = sites => {
  return sites.reduce((prev, curr) => {
    if (prev.length === 0) {
      return [
        {
          parish: curr.parish,
          sites: [curr.name],
        },
      ];
    }

    if (prev.find(a => a.parish === curr.parish)) {
      return [
        ...prev.map(a => {
          if (a.parish === curr.parish) {
            return {
              ...a,
              sites: [...a.sites, curr.name],
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
        sites: [curr.name],
      },
    ];
  }, []);
};

insert into houses (name, address, city, state, zip, img, mortgage, rent)
values (${propertyName}, ${address}, ${city}, ${state}, ${zip}, ${img}, ${mortgage}, ${rent});

select *
from houses;
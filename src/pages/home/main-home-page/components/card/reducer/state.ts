// export const countriesInitialState = [
//   {
//     id: '1',
//     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/800px-Flag_of_Georgia.svg.png',
//     name: 'Georgia',
//     population: '3.736 million',
//     capital: 'Tbilisi',
//     info: 'Georgia is a small and beautiful country with diverse nature and a generally mild climate, set in an advantageous geographical location. To the north are the Greater Caucasus Range and its glaciers, and to the south is the Lesser Caucasus Range.',
//     votes: 0,
//     isDeleted: false,
//     nameKa: 'საქართველო',
//     // populationKa: "3.736 მილიონი",
//     capitalKa: 'თბილისი',
//     infoKa:
//       'საქართველო არის პატარა და ლამაზია ქვეყანა სხვადასხვა ბუნებით და ზოგადად საშუალო კლიმატით, რომელიც მდებარეობს ხელსაყრელ გეოგრაფიულ ადგილას. ჩრდილოეთით მდებარეობს დიდი კავკასიონის ქედი და მისი მყინვარები, ხოლო სამხრეთით მცირე კავკასიონის ქედი.',
//   },
//   {
//     id: '2',
//     img: 'https://cdn.britannica.com/33/4833-050-F6E415FE/Flag-United-States-of-America.jpg',
//     name: 'United States',
//     population: '333.3 million',
//     capital: 'Washington, D.C.',
//     info: 'United States, country in North America, a federal republic of 50 states. Besides the 48 conterminous states that occupy the middle latitudes of the continent, the United States includes the state of Alaska, at the northwestern extreme of North America, and the island state of Hawaii, in the mid-Pacific Ocean. The conterminous states are bounded on the north by Canada, on the east by the Atlantic Ocean, on the south by the Gulf of Mexico and Mexico, and on the west by the Pacific Ocean. The United States is the fourth largest country in the world in area (after Russia, Canada, and China). The national capital is Washington, which is coextensive with the District of Columbia, the federal capital region created in 1790.',
//     votes: 0,
//     isDeleted: false,
//     nameKa: 'შეერთებული შტატები',
//     // populationKa: "333.3 მილიონი",
//     capitalKa: 'ვაშინგტონი',
//     infoKa:
//       'შეერთებული შტატები არის ქვეყანა ჩრდილოეთ ამერიკაში, 50 შტატის ფედერალური რესპუბლიკა. გარდა იმ 48 შტატებისა, რომლებიც Occupy the middle latitudes of the continent, შეერთებული შტატები მოიცავს შტატ ალასკას, ჩრდილოეთ ამერიკის ჩრდილო-დასავლეთ ნაწილში, და ჰავაის კუნძულ შტატს, შუა წყლის ოკეანეში. ეს შტატები მეზობლობს კანადასთან ჩრდილოეთით, ატლანტის ოკეანეს აღმოსავლეთით, მექსიკის ყურეს და მექსიკასთან სამხრეთით და წყნარ ოკეანეს დასავლეთით. შეერთებული შტატები არის მსოფლიოში მეოთხე უდიდესი ქვეყანა ფართობით (რუსეთის, კანადის და ჩინეთის შემდეგ). ეროვნული დედაქალაქი არის ვაშინგტონი, რომელიც თანხვედრია კოლუმბიის ოლქთან, რომელიც ჩამოყალიბდა 1790 წელს.',
//   },
//   {
//     id: '3',
//     img: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg',
//     name: 'Italy',
//     population: '58.94 million',
//     capital: 'Rome',
//     info: 'Italy is a boot-shaped peninsula that juts out of southern Europe into the Adriatic Sea, Tyrrhenian Sea, Mediterranean Sea, and other waters. Its location has played an important role in its history.',
//     votes: 0,
//     isDeleted: false,
//     nameKa: 'იტალია',
//     // populationKa: "58.94 მილიონი",
//     capitalKa: 'რომი',
//     infoKa:
//       'იტალია არის ბუმბულის ფორმის ნახევარკუნძული, რომელიც გამოირჩევა სამხრეთ ევროპაში, ადრიატიკის ზღვაში, ტირენიული ზღვაში, შუა ზღვისა და სხვა წყლებში. მისი მდებარეობა ითამაშა მნიშვნელოვანი როლი მისი ისტორიის განმავლობაში.',
//   },
//   {
//     id: '4',
//     img: 'https://cdn.britannica.com/25/4825-050-977D8C5E/Flag-United-Kingdom.jpg',
//     name: 'United Kingdom',
//     population: '66.97 million',
//     capital: 'London',
//     info: "The UK was an active member of the EU after its accession in 1973, although it chose to remain outside the Economic and Monetary Union. However, motivated in part by frustration at a remote bureaucracy in Brussels and massive migration into the country, UK citizens in 2016 voted by 52 to 48 percent to leave the EU. On 31 January 2020, the UK became the only country to depart the EU -- a move known as 'Brexit' -- after prolonged negotiations on EU-UK economic and security relationships.",
//     votes: 0,
//     isDeleted: false,
//     nameKa: 'დიდი ბრიტანეთი',
//     // populationKa: "66.97 მილიონი",
//     capitalKa: 'ლონდონი',
//     infoKa:
//       "დიდი ბრიტანეთი იყო აქტიური წევრი ევროკავშირის 1973 წლიდან მისი გაწვრთნის შემდეგ, თუმცა მან გადაწყვიტა დარჩენილიყო ეკონომიკური და მონეტარული კავშირის გარეთ. თუმცა, ნაწილობრივ ბრიუსელში რემოტური ბიუროკრატიისა და ქვეყანაში მასიური მიგრაციის გამო, ბრიტანელმა მოქალაქეებმა 2016 წელს ხმა მისცეს ევროკავშირიდან გასვლის 52-48 პროცენტის თანახმად. 31 იანვარს 2020 წელს, დიდი ბრიტანეთი გახდა ერთადერთი ქვეყანა, რომელიც დატოვა ევროკავშირი - ნაბიჯი, რომელსაც 'ბრექსიტი' უწოდეს - ევროკავშირის და დიდი ბრიტანეთის ეკონომიკური და უსაფრთხოების ურთიერთობების შემდეგ prolongებული მოლაპარაკების შემდეგ.",
//   },
//   {
//     id: '5',
//     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/800px-Flag_of_Morocco.svg.png',
//     name: 'Morocco',
//     population: '37.46 million',
//     capital: 'Rabat',
//     info: "In 788, about a century after the Arab conquest of North Africa, a series of Muslim dynasties began to rule in Morocco. In the 16th century, the Sa'adi monarchy, particularly under Ahmad al-MANSUR (1578-1603), repelled foreign invaders and inaugurated a golden age. The Alaouite Dynasty, to which the current Moroccan royal family belongs, dates from the 17th century. In 1860, Spain occupied northern Morocco and ushered in a half-century of trade rivalry among European powers that saw Morocco's sovereignty steadily erode; in 1912, the French imposed a protectorate over the country. A protracted independence struggle with France ended successfully in 1956. The internationalized city of Tangier and most Spanish possessions were turned over to the new country that same year. Sultan MOHAMMED V, the current monarch's grandfather, organized the new state as a constitutional monarchy and in 1957 assumed the title of king.",
//     votes: 0,
//     isDeleted: false,
//     nameKa: 'მოროკო',
//     // populationKa: "37.46 მილიონი",
//     capitalKa: 'რაბატი',
//     infoKa:
//       '788 წელს, დაახლოებით ერთი საუკუნით შემდეგ არაბების ხელში ჩაგდების შემდეგ ჩრდილოეთ აფრიკაში, დაიწყო მუსლიმური დინასტიების სერია, რომელიც დაიწყო მოროკოში. 16-ე საუკუნეში, სადი მეფობა, განსაკუთრებით აჰმედ ალ-მანსურის (1578-1603) მმართველობის დროს, გაუთვალისწინებელი დამპყრობლების წინააღმდეგ. ალაუიტური დინასტია, რომლის წევრიცაც არის მიმდინარე მაროკოს სამეფო ოჯახი, 17-ე საუკუნეშია გაწვდილი. 1860 წელს, ესპანეთმა დაკავებული ჩრდილოეთ მოროკო და დაიწყო ნახევარი საუკუნის სავაჭრო კონკურენცია ევროპულ ძალებს შორის, რამაც მოროკოს სუვერენობა აისახა; 1912 წელს, ფრანგებმა ქვეყნის დამცველობა დაამყარეს. საფრანგეთთან დამოუკიდებლობის მჭიდრო ბრძოლის შედეგად, წარმატებით დასრულდა 1956 წელს. ტანჟირი და უმეტესობა ესპანური საკუთრება გადაეცა ახალ ქვეყანას იმავე წელს. სულტან მუჰამედ V, მიმდინარე მეფის ბაბუა, დააარსა ახალი სახელმწიფო როგორც კონსტიტუციური მონარქია და 1957 წელს მიიღო მეფის წოდება.',
//   },
//   {
//     id: '6',
//     img: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/800px-Flag_of_Germany.svg.png',
//     name: 'Germany',
//     population: '83.8 million',
//     capital: 'Berlin',
//     info: "As Europe's largest economy and second most-populous nation (after Russia), Germany is a key member of the continent's economic, political, and defense organizations. European power struggles immersed Germany in two devastating world wars in the first half of the 20th century and left the country occupied by the victorious Allied powers of the US, UK, France, and the Soviet Union in 1945. With the advent of the Cold War, two German states were formed in 1949: the western Federal Republic of Germany (FRG) and the eastern German Democratic Republic (GDR). The democratic FRG embedded itself in key western economic and security organizations, including the EC (now the EU) and NATO, while the communist GDR was on the front line of the Soviet-led Warsaw Pact. The decline of the Soviet Union and the end of the Cold War allowed German reunification to occur in 1990. Since then, Germany has expended considerable funds to bring eastern productivity and wages up to western standards. In January 1999, Germany and 10 other EU countries introduced a common European exchange currency, the euro.",
//     votes: 0,
//     isDeleted: false,
//     nameKa: 'გერმანია',
//     // populationKa: "83.8 მილიონი",
//     capitalKa: 'ბერლინი',
//     infoKa:
//       'როგორც ევროპის უმსხვილესი ეკონომიკა და მეორე ყველაზე დასახლებული ქვეყანა (რუსეთის შემდეგ), გერმანია არის ძირითადი წევრი კონტინენტის ეკონომიკური, პოლიტიკური და თავდაცვით ორგანიზაციებში. ევროპის ძალაუფლების ბრძოლებმა გერმანია ჩაძირეს ორი დამანგრეველი მსოფლიო ომში XX საუკუნის პირველ ნახევარში და ქვეყანა დატოვა გამარჯვებული მოკავშირე ძალების, აშშ-ის, დიდ ბრიტანეთის, საფრანგეთის და საბჭოთა კავშირის მიერ 1945 წელს. ცივი ომის დაწყების შემდეგ, 1949 წელს ჩამოყალიბდა ორი გერმანიის სახელმწიფო: დასავლეთ ფედერალური რესპუბლიკა გერმანია (FRG) და აღმოსავლეთ გერმანიის დემოკრატიული რესპუბლიკა (GDR). დემოკრატიულმა FRG-მა თავისი თავი მოათავსა დასავლეთის მთავარ ეკონომიკურ და უსაფრთხოების ორგანიზაციებში, მათ შორის EC (ახლა ევროკავშირი) და NATO, ხოლო კომუნისტური GDR იყო სსრკ-ს მიერ გამართულ ვარშავის პაქტში. საბჭოთა კავშირის ვარდნის და ცივი ომის დასრულების შემდეგ გერმანიის გაერთიანება მოხდა 1990 წელს. მას შემდეგ გერმანია განსაკუთრებული თანხები დახარჯა აღმოსავლეთის პროდუქტიულობის და ხელფასების დასავლეთის სტანდარტებზე ჩამოყვანისთვის. 1999 წლის იანვარში, გერმანიამ და 10 სხვა ევროკავშირის ქვეყნებმა შეიქმნეს საერთო ევროპული გაცვლითი ვალუტა, ევრო.',
//   },
// ];

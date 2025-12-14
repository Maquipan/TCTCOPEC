// datos.js
const baseDeDatosCopec = `
,Región de Arica y Parinacota (XV),,,,
,Arica,Arica,Av. Diego Portales Nº 1072,600-200-02-02,Cupón Electrónico/TCT/TAE
,Arica,Arica,San Martin N° 699,600-200-02-02,Cupón Electrónico
,Arica,Arica,Panamericana Sur Nº 2824,600-200-02-02,Cupón Electrónico/TCT/BLUEMAX/VOLTEX
,Arica,Arica,Luis Valente Rossi Nº 1990,600-200-02-02,Cupón Electrónico
,Arica,Arica,18 De Septiembre Nº 2401,600-200-02-02,Cupón Electrónico/TCT
,Arica,Arica,Diego Portales N° 1115,600-200-02-02,Cupón Electrónico
,Arica,Arica,Av. Santiago Arata N° 3190,600-200-02-02,Cupón Electrónico/TCT/TAE
,Región de Tarapacá (I),,,,
,Iquique,Alto Hospicio,Ruta A-16 Km 322 / Avda Santa Rosa,600-200-02-02,Cupón Electrónico/TCT/BLUEMAX
,Iquique,Alto Hospicio,Av. Teniente Hernan Merino Correa 3945,600-200-02-02,Cupón Electrónico
,Iquique,Alto Hospicio,"Alto Hospicio, Ruta 16 Km 37",600-200-02-02,Cupón Electrónico/TCT/TAE
,Iquique,Iquique,Vivar N° 402,600-200-02-02,Cupón Electrónico/TCT/TAE
,Iquique,Iquique,"Sitio Nº 54-B, Barrio Industrial",600-200-02-02,Cupón Electrónico/TCT/TAE
,Iquique,Iquique,Salvador Allende N° 2345,600-200-02-02,Cupón Electrónico/TCT
,Iquique,Iquique,Avda. Salvador Allende N° 2102,600-200-02-02,Cupón Electrónico
,Iquique,Iquique,Manuel Rodriguez Nº 1404.,600-200-02-02,Cupón Electrónico
,Iquique,Iquique,Anibal Pinto N° 1377,600-200-02-02,Cupón Electrónico
,Iquique,Iquique,Avda. Arturo Prat Chacon 1732,600-200-02-02,Cupón Electrónico/VOLTEX
,Tamarugal,Pica,Av. 27 De Abril S/n,600-200-02-02,Cupón Electrónico/TCT
,Tamarugal,Pozo Almonte,Panamericana Norte Km 1810,600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX
,Región de Antofagasta (II),,,,
,Antofagasta,Antofagasta,Av. Antonio Rendic N° 3855,600-200-02-02,Cupón Electrónico
,Antofagasta,Antofagasta,Avda Pedro Aguirre Cerda N.10980,600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX
,Antofagasta,Antofagasta,Av. Mejillones 4950 Esq. Illapel,600-200-02-02,Cupón Electrónico
,Antofagasta,Antofagasta,Ruta 5 Norte Km 1398,600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX
,Antofagasta,Antofagasta,RUTA 5 NORTE KM 1392,600-200-02-02,Cupón Electrónico/TCT/BLUEMAX/VOLTEX
,Antofagasta,Antofagasta,San Martin Esq. Uribe,600-200-02-02,Cupón Electrónico
,Antofagasta,Antofagasta,Av. Edmundo Perez Zujovic N° 10675,600-200-02-02,Cupón Electrónico/VOLTEX
,Antofagasta,Antofagasta,Av. Angamos N° 0633,600-200-02-02,Cupón Electrónico
,Antofagasta,Antofagasta,Ruta 5 Norte Km 1351,600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX
,Antofagasta,Antofagasta,Av. Argentina Nº 1103,600-200-02-02,Cupón Electrónico
,Antofagasta,Antofagasta,Avda. A. Rendic Esq. Avda. P. A. Cerda,600-200-02-02,Cupón Electrónico/TCT
,Antofagasta,Antofagasta,Av. Argentina N° 3211,600-200-02-02,Cupón Electrónico
,Antofagasta,Antofagasta,Avda. E. Perez Zujovic Nº 4256,600-200-02-02,Cupón Electrónico/TCT/TAE
,Antofagasta,Antofagasta,Av. República de Croacia N° 286,600-200-02-02,Cupón Electrónico
,Antofagasta,Mejillones,Ruta B-16 #1200,600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX/VOLTEX
,Antofagasta,Sierra Gorda,Panamericana Norte S/n,600-200-02-02,Cupón Electrónico/TCT
,Antofagasta,Taltal,Francisco Bilbao N° 101,600-200-02-02,Cupón Electrónico/TCT/TAE
,Antofagasta,Taltal,Panamericana Norte Km 1144,600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX
,El Loa,Calama,Granaderos N° 3524,600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX/VOLTEX
,El Loa,Calama,Abaroa Esq. Latorre S/n,600-200-02-02,Cupón Electrónico/TCT/TAE
,El Loa,Calama,Diego De Almagro Nº 2547,600-200-02-02,Cupón Electrónico
,El Loa,Calama,Avenida Balmaceda N° 3012,600-200-02-02,Cupón Electrónico/TCT
,El Loa,Calama,"Punta Diamante S/N, Salida Sur Chuquicamata",600-200-02-02,Cupón Electrónico/TCT/TAE
,El Loa,San Pedro De Atacama,Ruta 27 Ch Interseccion Ruta B-241,600-200-02-02,Cupón Electrónico/TCT/VOLTEX
,Tocopilla,María Elena,Avda. Pedro Montt S/n,600-200-02-02,Cupón Electrónico/TCT/TAE
,Tocopilla,Tocopilla,Av. Teniente Merino 3303,600-200-02-02,Cupón Electrónico/TCT/BLUEMAX
,Tocopilla,Tocopilla,Av. 11 De Septiembre S/n,600-200-02-02,Cupón Electrónico/TCT/TAE
,Región de Atacama (III),,,,
,Copiapó,Caldera,Montt 207,600-200-02-02,Cupón Electrónico
,Copiapó,Copiapó,Av. Los Loros Nº 1310,600-200-02-02,Cupón Electrónico
,Copiapó,Copiapó,"Carretera Panamericana N° 255, Pob.Rosario",600-200-02-02,Cupón Electrónico/TCT/TAE
,Copiapó,Copiapó,Av. Henriquez Nº 504,600-200-02-02,Cupón Electrónico
,Copiapó,Copiapó,Av. Copayapu Nº 2024,600-200-02-02,Cupón Electrónico/TCT
,Copiapó,Copiapó,Carretera Panamericana Norte Km.811,600-200-02-02,Cupón Electrónico/TCT
,Copiapó,Copiapó,Copayapu N°4656,600-200-02-02,Cupón Electrónico/TCT/TAE/VOLTEX
,Copiapó,Copiapó,Ruta 5 Norte Km 838,600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX
,Copiapó,Tierra Amarilla,Av. Miguel Lemeur Nº 427,600-200-02-02,Cupón Electrónico/TCT/TAE
,Chañaral,Chañaral,Panamericana Norte N°800,600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX
,Chañaral,Chañaral,"Merino Jarpa, Panamericana Norte S/N, Km 973",600-200-02-02,Cupón Electrónico/TCT
,Chañaral,Diego De Almagro,Anibal Pinto N° 400,600-200-02-02,Cupón Electrónico/TCT/TAE
,Chañaral,Diego De Almagro,Av. El Tofo N° 043,600-200-02-02,Cupón Electrónico/TCT
,Huasco,Huasco,Ignacio De La Carrera N°167,600-200-02-02,Cupón Electrónico/TCT
,Huasco,Vallenar,"Panamericana Norte, Cruce Camino Huasco",600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX/VOLTEX
,Huasco,Vallenar,Brasil Nº 1001,600-200-02-02,Cupón Electrónico
,Huasco,Vallenar,Maranon 1280,600-200-02-02,Cupón Electrónico
,Región de Coquimbo (IV),,,,
,Elqui,Andacollo,El Salitre N° 20,600-200-02-02,Cupón Electrónico
,Elqui,Coquimbo,"Baquedano, Merino Jarpa",600-200-02-02,Cupón Electrónico
,Elqui,Coquimbo,"Totoral Lote 3A, Tongoy",600-200-02-02,Cupón Electrónico
,Elqui,Coquimbo,Talca Esquina Alessandri,600-200-02-02,Cupón Electrónico
,Elqui,Coquimbo,Avda. La Cantera 1860,600-200-02-02,Cupón Electrónico/TCT
,Elqui,Coquimbo,Avda. La Cantera N°1935,600-200-02-02,Cupón Electrónico/TCT/TAE
,Elqui,Coquimbo,Av. Alessandri Nº 1209,600-200-02-02,Cupón Electrónico
,Elqui,Coquimbo,Carretera Panamericana Norte Km 455,600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX/VOLTEX
,Elqui,Coquimbo,"Los Copihues N° 650, Sindempart",600-200-02-02,Cupón Electrónico
,Elqui,La Serena,Av. Colo Colo Nº 4486,600-200-02-02,Cupón Electrónico/TCT/TAE
,Elqui,La Serena,"Panamericana Norte, Esq. Fco. Aguirre km 476",600-200-02-02,Cupón Electrónico
,Elqui,La Serena,Balmaceda Nº 1839,600-200-02-02,Cupón Electrónico
,Elqui,La Serena,Colo Colo S/n,600-200-02-02,Cupón Electrónico
,Elqui,La Serena,"Balmaceda, Paradero 10 1/2, La Pampa",600-200-02-02,Cupón Electrónico/TCT/TAE
,Elqui,La Serena,Colo Colo 5300,600-200-02-02,Cupón Electrónico/TCT
,Elqui,La Serena,"G. Gonzalez Videla Nº 1965, Los Molles",600-200-02-02,Cupón Electrónico
,Elqui,La Serena,El Islon N° 2561,600-200-02-02,Cupón Electrónico
,Elqui,La Serena,Av. 4 Esquinas N°1550,600-200-02-02,Cupón Electrónico
,Elqui,La Serena,"Parcela 20, Vega Sur, Ruta 5 Norte Km 46",600-200-02-02,Cupón Electrónico/TCT/BLUEMAX/VOLTEX
,Elqui,La Serena,Nicaragua Nº 1480,600-200-02-02,Cupón Electrónico
,Elqui,La Serena,"Panamericana Norte Km 480, Sector Vegas Nor",600-200-02-02,Cupón Electrónico/TCT/BLUEMAX
,Elqui,Vicuña,"Las Delicias, Sargento Aldea",600-200-02-02,Cupón Electrónico/TCT/TAE
,Limari,Combarbalá,Juan Ignacio Flores N° 576,600-200-02-02,Cupón Electrónico/TCT
,Limari,Ovalle,"Ariztia, Esq. Antonio Tirado",600-200-02-02,Cupón Electrónico/TCT
,Limari,Ovalle,Benavente Nº 836,600-200-02-02,Cupón Electrónico
,Limari,Ovalle,Panamericana Norte Km 370,600-200-02-02,Cupón Electrónico/TCT/VOLTEX
,Limari,Ovalle,Circunvalacion Esq. Ariztia Oriente 1031,600-200-02-02,Cupón Electrónico
,Limari,Ovalle,Socos Esq. Victoria,600-200-02-02,Cupón Electrónico
,Limari,Ovalle,Avenida Manuel Penafiel,600-200-02-02,Cupón Electrónico/TCT/TAE
,Choapa,Illapel,"Tarcicio Valderrama, El Mirador S/n",600-200-02-02,Cupón Electrónico/TCT/TAE
,Choapa,Los Vilos,"Panamericana Norte Km 195, Pichidangui",600-200-02-02,Cupón Electrónico/TCT
,Choapa,Los Vilos,Panamericana Norte Km. 204 ( Ubic. Poniente ),600-200-02-02,Cupón Electrónico/TCT/BLUEMAX/VOLTEX
,Choapa,Los Vilos,Carretera Panamericana Norte Km 225,600-200-02-02,Cupón Electrónico/TCT
,Choapa,Los Vilos,Panamericana Norte Km 227,600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX/VOLTEX
,Choapa,Los Vilos,Carretera Panamericana Norte Km 204 ( Ubic. Oriente ),600-200-02-02,Cupón Electrónico/TCT/BLUEMAX/VOLTEX
,Choapa,Salamanca,"Carretera D-81, Lote E, Sector Sali",600-200-02-02,Cupón Electrónico/TCT/TAE
,Choapa,Salamanca,O'higgins Nº 490,600-200-02-02,Cupón Electrónico/TCT
,Región de Valparaíso (V),,,,
,Valparaíso,Casablanca,Constitucion Nº 550,600-200-02-02,Cupón Electrónico/TCT/TAE
,Valparaíso,Concón,"Av. Borgono N° 25175, Concon",600-200-02-02,Cupón Electrónico
,Valparaíso,Puchuncaví,Ruta F-30-e,600-200-02-02,Cupón Electrónico/TCT/TAE
,Valparaíso,Puchuncaví,"Ruta F30e S/N Lote Cc4, Marbella",600-200-02-02,Cupón Electrónico/TCT/VOLTEX
,Valparaíso,Quintero,Normandie Nº 2500,600-200-02-02,Cupón Electrónico/TCT
,Valparaíso,Quintero,"Ruta F30-E, Parcela 26-B3, LOTE B",600-200-02-02,Cupón Electrónico/TCT
,Valparaíso,Valparaíso,Av. Brasil 2641,600-200-02-02,Cupón Electrónico
,Valparaíso,Valparaíso,Santos Ossa Nº 960,600-200-02-02,Cupón Electrónico/TCT
,Valparaíso,Valparaíso,Av. Colon Nº 2330,600-200-02-02,Cupón Electrónico
,Valparaíso,Valparaíso,"Placilla Km 105, Ruta 68, Penuelas",600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX/VOLTEX
,Valparaíso,Valparaíso,Av. Brasil Nº 1804,600-200-02-02,Cupón Electrónico/TCT
,Valparaíso,Valparaíso,Av. Playa Ancha Nº 697,600-200-02-02,Cupón Electrónico/TCT
,Valparaíso,Valparaíso,"Chacabuco, General Cruz",600-200-02-02,Cupón Electrónico/TCT/TAE
,Valparaíso,Valparaíso,Av. Matta N° 2114. Cerro Placeres,600-200-02-02,Cupón Electrónico
,Valparaíso,Valparaíso,"Av. Curauma Sur 2795, Placilla",600-200-02-02,Cupón Electrónico
,Valparaíso,Valparaíso,Av. Federico Sta. Maria Nº 2044,600-200-02-02,Cupón Electrónico
,Valparaíso,Viña Del Mar,Av. Libertad Nº 501,600-200-02-02,Cupón Electrónico/VOLTEX
,Valparaíso,Viña Del Mar,Av. Valparaiso Nº 1160,600-200-02-02,Cupón Electrónico
,Valparaíso,Viña Del Mar,Quillota Nº 724,600-200-02-02,Cupón Electrónico
,Valparaíso,Viña Del Mar,Agua Santa Nº 820,600-200-02-02,Cupón Electrónico
,Valparaíso,Viña Del Mar,"Av. Edmundo Eluchans N° 3100, Sector Bosques De Montemar",600-200-02-02,Cupón Electrónico/VOLTEX
,Valparaíso,Viña Del Mar,1 Norte Nº 2399,600-200-02-02,Cupón Electrónico/TCT
,Valparaíso,Viña Del Mar,Avenida Eduardo Frei N°4025,600-200-02-02,Cupón Electrónico/TCT
,Valparaíso,Viña Del Mar,"Jorge Montt Nº 2300, Recta Las Salinas",600-200-02-02,Cupón Electrónico
,Valparaíso,Viña Del Mar,"Limache, Lusitania Nº 2321",600-200-02-02,Cupón Electrónico/TCT/TAE
,Valparaíso,Viña Del Mar,Avenida Alessandri N° 3401,600-200-02-02,Cupón Electrónico
,Valparaíso,Viña Del Mar,"Av. Alessandri, 21 Norte",600-200-02-02,Cupón Electrónico/TCT
,Valparaíso,Viña Del Mar,Camino Internacional Oriente N°4690,600-200-02-02,Cupón Electrónico/TCT
,Valparaíso,Viña Del Mar,Camino Internacional N° 5001,600-200-02-02,Cupón Electrónico/TCT
,Valparaíso,Viña Del Mar,Troncal Sur N°3290,600-200-02-02,Cupón Electrónico/VOLTEX
,Marga Marga,Limache,Av. Palmira Romano Norte Nº 1,600-200-02-02,Cupón Electrónico/TCT
,Marga Marga,Limache,Av. Palmira Romano Sur Nº 500,600-200-02-02,Cupón Electrónico
,Marga Marga,Limache,RUTA 60 CH KM. 35. 9,600-200-02-02,Cupón Electrónico/TCT/BLUEMAX
,Marga Marga,Olmué,Av. Adolfo Eastman 2603,600-200-02-02,Cupón Electrónico
,Marga Marga,Quilpué,Marga Marga 1628,600-200-02-02,Cupón Electrónico/TCT
,Marga Marga,Quilpué,"Freire, Gomez Carreno S/n",600-200-02-02,Cupón Electrónico/TCT
,Marga Marga,Quilpué,Los Carrera Nº 1091,600-200-02-02,Cupón Electrónico/TCT
,Marga Marga,Quilpué,Avenida Los Carrera N° 01050,600-200-02-02,Cupón Electrónico
,Marga Marga,Villa Alemana,Av. Valparaiso Nº 1999,600-200-02-02,Cupón Electrónico
,Marga Marga,Villa Alemana,Av. Valparaiso Nº 1215,600-200-02-02,Cupón Electrónico/TCT/TAE
,Marga Marga,Villa Alemana,Marga Marga N° 1612,600-200-02-02,Cupón Electrónico
,Marga Marga,Villa Alemana,Camino Troncal N° 1831,600-200-02-02,Cupón Electrónico
,San Antonio,Algarrobo,"Sta. Teresita, Penablanca S/n",600-200-02-02,Cupón Electrónico/TCT/TAE
,San Antonio,Cartagena,"Av. El Peral S/N, San Sebastian",600-200-02-02,Cupón Electrónico/TCT
,San Antonio,El Quisco,Av Isidoro Dubournais N°1459,600-200-02-02,Cupón Electrónico
,San Antonio,San Antonio,Lauro Barros Nº 60,600-200-02-02,Cupón Electrónico
,San Antonio,San Antonio,Los Aromos Nº 346,600-200-02-02,Cupón Electrónico
,San Antonio,San Antonio,Av. Barros Luco 950,600-200-02-02,Cupón Electrónico
,San Antonio,San Antonio,"Av. Barros Luco 2824, Esq. 10 Sur",600-200-02-02,Cupón Electrónico/TCT
,San Antonio,San Antonio,Av. El Parque Acera Sur N° 2545,600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX
,San Antonio,Santo Domingo,Teniente Cruz Martinez 70,600-200-02-02,Cupón Electrónico/TCT/VOLTEX
,Quillota,Calera,Los Carrera Nº 1513,600-200-02-02,Cupón Electrónico/TCT
,Quillota,Calera,"J. J. Perez, Caupolican",600-200-02-02,Cupón Electrónico/TCT
,Quillota,Hijuelas,Carretera Panamericana Norte Km. 103,600-200-02-02,Cupón Electrónico/TCT/BLUEMAX/VOLTEX
,Quillota,La Cruz,21 De Mayo Nº 5490,600-200-02-02,Cupón Electrónico/TCT
,Quillota,Nogales,Juan Rusque Nº 312,600-200-02-02,Cupón Electrónico/TCT/TAE
,Quillota,Quillota,"Freire, Echeverria",600-200-02-02,Cupón Electrónico/TCT/TAE
,Quillota,Quillota,Av. Rafael Ariztia N°705,600-200-02-02,Cupón Electrónico
,Quillota,Quillota,"Blanco Nº 661, Yungay",600-200-02-02,Cupón Electrónico/TCT
,Quillota,Quillota,"Av. Juan Bautista Alberdi, Bulnes",600-200-02-02,Cupón Electrónico/TCT
,Ranco,Futrono,Balmaceda Nº 100,600-200-02-02,Cupón Electrónico/TCT
,Petorca,Cabildo,Humeres N°1302,600-200-02-02,Cupón Electrónico/TCT
,Petorca,Cabildo,Av. Humeres 2498,600-200-02-02,Cupón Electrónico/TCT
,Petorca,La Ligua,Portales Nº 1131,600-200-02-02,Cupón Electrónico/TCT/TAE
,Petorca,Papudo,Irarrazaval Nº 435,600-200-02-02,Cupón Electrónico
,Petorca,Petorca,Poblacion La Ñipa S/n,600-200-02-02,Cupón Electrónico/TCT
,Petorca,Zapallar,Januario Ovalle Nº 128,600-200-02-02,Cupón Electrónico/VOLTEX
,San Felipe,Catemu,El Arrayan S/n,600-200-02-02,Cupón Electrónico/TCT/TAE
,San Felipe,Llaillay,Av. Jose Manuel Balmaceda 1490,600-200-02-02,Cupón Electrónico
,San Felipe,Llaillay,Carretera Panamericana Norte Km 90,600-200-02-02,Cupón Electrónico/TCT/BLUEMAX/VOLTEX
,San Felipe,San Felipe,"Ruta 60-C 4, Sector 3 Esquinas",600-200-02-02,Cupón Electrónico/TCT/TAE
,San Felipe,San Felipe,Av. Libertador Bernardo O'higgins S/n,600-200-02-02,Cupón Electrónico
,San Felipe,San Felipe,Combate Las Coimas Nº 1412,600-200-02-02,Cupón Electrónico
,San Felipe,San Felipe,"Jose Manso De Velasco, Esq. Las Heras 0",600-200-02-02,Cupón Electrónico/TCT
,San Felipe,San Felipe,Circunvalacion Esquina Tocornal Sn,600-200-02-02,Cupón Electrónico
,San Felipe,Santa María,"Irarrazaval, Esq. Ohiggins",600-200-02-02,Cupón Electrónico/TAE
,Los Andes,Calle Larga,Calle Larga Nº 2823,600-200-02-02,Cupón Electrónico/TCT
,Los Andes,Los Andes,"Pascual Baburizza, Rene Schneider",600-200-02-02,Cupón Electrónico
,Los Andes,Los Andes,Esmeralda Esquina Santa Teresa,600-200-02-02,Cupón Electrónico
,Los Andes,Los Andes,"Camino Internacional S/N Km 37, Rio Blanco",600-200-02-02,Cupón Electrónico/TCT
,Los Andes,Los Andes,"Av. Argentina , Las Juntas",600-200-02-02,Cupón Electrónico/TCT/TAE
,Los Andes,Rinconada,"Carretera General San Martin Nº 2510, Rinconada",600-200-02-02,Cupón Electrónico/TCT
,Los Andes,San Esteban,Av. Alessandri N° 1811,600-200-02-02,Cupón Electrónico/TCT
,Región Metropolitana de Santiago (RM),,,,
,Santiago,Ñuñoa,Av. Irarrazaval Nº 1102,600-200-02-02,Cupón Electrónico
,Santiago,Ñuñoa,Av. Irarrazaval Nº 5277,600-200-02-02,Cupón Electrónico
,Santiago,Ñuñoa,Vicuna Mackenna Nº 654,600-200-02-02,Cupón Electrónico
,Santiago,Ñuñoa,Pedro De Valdivia Nº 4298,600-200-02-02,Cupón Electrónico
,Santiago,Ñuñoa,Irarrazabal Nº 4102,600-200-02-02,Cupón Electrónico
,Santiago,Ñuñoa,Av. Bustamante Nº 648,600-200-02-02,Cupón Electrónico
,Santiago,Ñuñoa,San Eugenio Nº 1602,600-200-02-02,Cupón Electrónico/VOLTEX
,Santiago,Ñuñoa,Avda. Presidente Jose Batlle y Ordonez 4312,600-200-02-02,Cupón Electrónico
,Santiago,Ñuñoa,Vicuna Mackenna Nº 1990,600-200-02-02,Cupón Electrónico/TCT/TAE
,Santiago,Cerrillos,Pedro Aguirre Cerda Nº 5355,600-200-02-02,Cupón Electrónico
,Santiago,Cerrillos,Av. Pedro Aguirre Cerda Nº 5903,600-200-02-02,Cupón Electrónico/TCT
,Santiago,Cerrillos,Lo Errazuriz Nº 713,600-200-02-02,Cupón Electrónico
,Santiago,Conchalí,"Av. Principal Nº 1236, Esq. El Guanaco",600-200-02-02,Cupón Electrónico
,Santiago,Conchalí,Independencia Nº 3060,600-200-02-02,Cupón Electrónico/TCT
,Santiago,El Bosque,Gran Avenida Nº 13040,600-200-02-02,Cupón Electrónico
,Santiago,Huechuraba,Av. Pedro Fontova N° 6789,600-200-02-02,Cupón Electrónico/VOLTEX
,Santiago,Huechuraba,Recoleta Nº 4406 Esquina Vespucio,600-200-02-02,Cupón Electrónico/TCT
,Santiago,Huechuraba,Americo Vespucio Nº 1403,600-200-02-02,Cupón Electrónico/TCT/TAE
,Santiago,Independencia,General Prieto N° 1500,600-200-02-02,Cupón Electrónico
,Santiago,Independencia,Panamericana Norte Nº 1767,600-200-02-02,Cupón Electrónico/TCT
,Santiago,Independencia,"Fermin Vivaceta Nº 715, Esq. Retiro",600-200-02-02,Cupón Electrónico/TCT
,Santiago,Independencia,Panamericana Norte Nº 633,600-200-02-02,Cupón Electrónico/TCT
,Santiago,Independencia,Vivaceta Nº 1108,600-200-02-02,Cupón Electrónico
,Santiago,Independencia,Av. Independencia Nº1517,600-200-02-02,Cupón Electrónico
,Santiago,La Cisterna,Gran Avenida Nº 8765,600-200-02-02,Cupón Electrónico
,Santiago,La Cisterna,"Gran Av. Nº 9250, Los Morros",600-200-02-02,Cupón Electrónico/TCT
,Santiago,La Florida,Av. La Florida Nº 9871,600-200-02-02,Cupón Electrónico
,Santiago,La Florida,Av. La Florida Nº 11215,600-200-02-02,Cupón Electrónico
,Santiago,La Florida,Lia Aguirre Nº 10,600-200-02-02,Cupón Electrónico
,Santiago,La Florida,Trinidad Nº 1694,600-200-02-02,Cupón Electrónico
,Santiago,La Florida,Walker Martinez N° 2283 Esquina Santa Natalia,600-200-02-02,Cupón Electrónico
,Santiago,La Florida,Vicuna Mackenna Nº 8257,600-200-02-02,Cupón Electrónico
,Santiago,La Florida,San Jose De La Estrella Nº 1301,600-200-02-02,Cupón Electrónico
,Santiago,La Florida,Trinidad Nº 1300,600-200-02-02,Cupón Electrónico/TCT
,Santiago,La Florida,Av. Americo Vespucio Nº 9150,600-200-02-02,Cupón Electrónico/TCT
,Santiago,La Granja,Sta. Rosa Nº 9468,600-200-02-02,Cupón Electrónico/TCT
,Santiago,La Pintana,Av. Sta. Rosa Nº 13010,600-200-02-02,Cupón Electrónico/TCT
,Santiago,La Pintana,Teniente Montt Nº 12112,600-200-02-02,Cupón Electrónico
,Santiago,La Reina,"Avda Bilbao Nº5739, Vespucio",600-200-02-02,Cupón Electrónico/TCT
,Santiago,La Reina,Av. Ossa Nº 591 Esq.Simon Bolivar,600-200-02-02,Cupón Electrónico/TCT
,Santiago,La Reina,Principe De Gales Nº 6880,600-200-02-02,Cupón Electrónico
,Santiago,Las Condes,Av. Las Condes Nº 12145,600-200-02-02,Cupón Electrónico/VOLTEX
,Santiago,Las Condes,"Av. San Ramon N.2701, San Carlos De Apoquindo",600-200-02-02,Cupón Electrónico/VOLTEX
,Santiago,Las Condes,Av. Colon Nº 7400,600-200-02-02,Cupón Electrónico
,Santiago,Las Condes,CALLE LOS POZOS 7180,600-200-02-02,Cupón Electrónico
,Santiago,Las Condes,"Manquehue Norte Nº 674, Pdte. Riesco",600-200-02-02,Cupón Electrónico
,Santiago,Las Condes,Av. Las Condes Nº 8170,600-200-02-02,Cupón Electrónico
,Santiago,Las Condes,Camino El Alba N° 9610 / El Algarrobo,600-200-02-02,Cupón Electrónico
,Santiago,Las Condes,Isabel La Catolica Nº 4020,600-200-02-02,Cupón Electrónico
,Santiago,Las Condes,Apoquindo Nº 7520,600-200-02-02,Cupón Electrónico
,Santiago,Lo Barnechea,"Los Condores Nº 225, Farellones",600-200-02-02,Cupón Electrónico
,Santiago,Lo Barnechea,Av La Dehesa N° 1310,600-200-02-02,Cupón Electrónico
,Santiago,Lo Barnechea,Av. Los Trapenses 2250,600-200-02-02,Cupón Electrónico/VOLTEX
,Santiago,Lo Barnechea,"La Dehesa Nº 2016, El Rodeo",600-200-02-02,Cupón Electrónico
,Santiago,Lo Espejo,Camino Lo Sierra Nº 03079,600-200-02-02,Cupón Electrónico/TCT
,Santiago,Macul,Av. Macul 5880,600-200-02-02,Cupón Electrónico/TCT
,Santiago,Macul,Av. J. P. Alessandri Nº 4003,600-200-02-02,Cupón Electrónico/TCT
,Santiago,Macul,Escuela Agricola Nº 2589,600-200-02-02,Cupón Electrónico
,Santiago,Macul,Jose Pedro Alessandri Nº 2526,600-200-02-02,Cupón Electrónico
,Santiago,Macul,Vicuna Mackenna Nº 5700,600-200-02-02,Cupón Electrónico
,Santiago,Maipú,Avda. Pajaritos N° 5.200,600-200-02-02,Cupón Electrónico/VOLTEX
,Santiago,Maipú,El Rosal 6349,600-200-02-02,Cupón Electrónico
,Santiago,Maipú,Alberto Llona Nº 640 .,600-200-02-02,Cupón Electrónico
,Santiago,Maipú,Avenida 5 De Abril 1310,600-200-02-02,Cupón Electrónico
,Santiago,Maipú,Avda. Los Pajaritos N° 3333/Esquina Rafael Riesco Bernales,600-200-02-02,Cupón Electrónico
,Santiago,Maipú,Camino Melipilla Nº 11820,600-200-02-02,Cupón Electrónico/TCT
,Santiago,Maipú,Camino Lonquen N° 9521,600-200-02-02,Cupón Electrónico/TCT/BLUEMAX
,Santiago,Maipú,Carmen Nº 988,600-200-02-02,Cupón Electrónico
,Santiago,Providencia,Av. Andres Bello Nº 1051,600-200-02-02,Cupón Electrónico
,Santiago,Providencia,Pedro De Valdivia Nº 2142,600-200-02-02,Cupón Electrónico
,Santiago,Providencia,Av. Eliodoro Yanez Nº 1960,600-200-02-02,Cupón Electrónico
,Santiago,Providencia,Salvador Nº 1368,600-200-02-02,Cupón Electrónico
,Santiago,Providencia,Av. Francisco Bilbao Nº 960,600-200-02-02,Cupón Electrónico
,Santiago,Providencia,Lota Nº 2864,600-200-02-02,Cupón Electrónico
,Santiago,Providencia,Av. Tobalaba N° 1895,600-200-02-02,Cupón Electrónico
,Santiago,Providencia,Manuel Montt Nº 1118 Esq Alferez Real,600-200-02-02,Cupón Electrónico/TCT
,Santiago,Providencia,Los Leones Nº 2347,600-200-02-02,Cupón Electrónico
,Santiago,Providencia,Av. Francisco Bilbao Nº 2682,600-200-02-02,Cupón Electrónico
,Santiago,Providencia,Av. Providencia Nº 1072,600-200-02-02,Cupón Electrónico
,Santiago,Providencia,Av. Santa Maria Nº 0740,600-200-02-02,Cupón Electrónico
,Santiago,Pudahuel,San Pablo Nº 8815,600-200-02-02,Cupón Electrónico/TCT
,Santiago,Pudahuel,Carretera Ruta 68 Km. 17 ,600-200-02-02,Cupón Electrónico/TCT/BLUEMAX/VOLTEX
,Santiago,Pudahuel,San Pablo Nº 8529,600-200-02-02,Cupón Electrónico
,Santiago,Pudahuel,J. J. Perez Nº 8408,600-200-02-02,Cupón Electrónico
,Santiago,Pudahuel,Costanera Norte Km 33.75,600-200-02-02,Cupón Electrónico/TCT/VOLTEX
,Santiago,Quilicura,Las Torres 902 Esq Lo Cruzat,600-200-02-02,Cupón Electrónico
,Santiago,Quilicura,"Av. Ohiggins N° 750, Lote B-5a",600-200-02-02,Cupón Electrónico
,Santiago,Quilicura,Vespucio N° 1370,600-200-02-02,Cupón Electrónico
,Santiago,Quilicura,Jose Francisco Vergara Nº 019,600-200-02-02,Cupón Electrónico
,Santiago,Quinta Normal,"Vargas Fontecilla Nº 4182, Esq. Coronel Robles",600-200-02-02,Cupón Electrónico
,Santiago,Quinta Normal,San Pablo N° 4383 Esquina Bismark,600-200-02-02,Cupón Electrónico
,Santiago,Quinta Normal,Salvador Gutierrez Nº 4964,600-200-02-02,Cupón Electrónico
,Santiago,Quinta Normal,Av. Carrascal Nº 5875,600-200-02-02,Cupón Electrónico
,Santiago,Quinta Normal,Mapocho Nº 3898,600-200-02-02,Cupón Electrónico
,Santiago,Quinta Normal,Alberto Edwards Nº 4229,600-200-02-02,Cupón Electrónico
,Santiago,Quinta Normal,Jose Joaquin Perez N° 5190,600-200-02-02,Cupón Electrónico
,Santiago,Recoleta,Av. El Salto Nº 2098,600-200-02-02,Cupón Electrónico
,Santiago,Recoleta,Av. Recoleta Nº 1207,600-200-02-02,Cupón Electrónico
,Santiago,Recoleta,Av. Recoleta Nº 601 Dominica,600-200-02-02,Cupón Electrónico
,Santiago,Recoleta,Recoleta Nº 3805,600-200-02-02,Cupón Electrónico
,Santiago,Renca,Av. Jose M.Balmaceda 4574,600-200-02-02,Cupón Electrónico
,Santiago,Renca,"Av. Americo Vespucio Nº 2001, Lo Boza",600-200-02-02,Cupón Electrónico/TCT/BLUEMAX
,Santiago,Renca,Domingo Sta. Maria Nº 3329,600-200-02-02,Cupón Electrónico
,Santiago,San Joaquín,Sta. Elena Nº 2206,600-200-02-02,Cupón Electrónico
,Santiago,San Joaquín,Sierra Bella Nº 3009,600-200-02-02,Cupón Electrónico/TCT
,Santiago,San Joaquín,Av. Vicuna Mackenna Nº 3647,600-200-02-02,Cupón Electrónico
,Santiago,San Miguel,Sta. Rosa Nº 5499,600-200-02-02,Cupón Electrónico/TCT/TAE
,Santiago,San Miguel,Camino Lo Ovalle Nº 669,600-200-02-02,Cupón Electrónico
,Santiago,Santiago,Av. Blanco Encalada Nº 1899,600-200-02-02,Cupón Electrónico/TCT
,Santiago,Santiago,Av. Matta Nº 788,600-200-02-02,Cupón Electrónico
,Santiago,Santiago,Rosas Nº 3218,600-200-02-02,Cupón Electrónico
,Santiago,Santiago,San Pablo Nº 2602,600-200-02-02,Cupón Electrónico
,Santiago,Santiago,Mapocho Nº 1998/Brasil,600-200-02-02,Cupón Electrónico
,Santiago,Santiago,"San Pablo Nº 1990, Brasil",600-200-02-02,Cupón Electrónico
,Santiago,Santiago,Nataniel Cox Nº 1802,600-200-02-02,Cupón Electrónico/TCT
,Santiago,Santiago,Viel Nº 1921,600-200-02-02,Cupón Electrónico
,Santiago,Santiago,Bascunan Guerrero Nº 568,600-200-02-02,Cupón Electrónico
,Santiago,Santiago,Carmen Nº 185,600-200-02-02,Cupón Electrónico
,Santiago,Santiago,Arturo Prat Nº 683,600-200-02-02,Cupón Electrónico
,Santiago,Santiago,Lord Cochrane Nº 152,600-200-02-02,Cupón Electrónico
,Santiago,Santiago,Bascunan Guerrero Nº 2445,600-200-02-02,Cupón Electrónico/TCT
,Santiago,Santiago,San Pablo Nº 1571,600-200-02-02,Cupón Electrónico
,Santiago,Vitacura,Av. Vitacura Nº 6380,600-200-02-02,Cupón Electrónico
,Santiago,Vitacura,Vitacura N° 5579,600-200-02-02,Cupón Electrónico/TCT/VOLTEX
,Santiago,Vitacura,"Costanera Norte Km 2,5 E-0",600-200-02-02,Cupón Electrónico/VOLTEX
,Santiago,Vitacura,"Av. Vitacura Nº 4207, Los Laureles",600-200-02-02,Cupón Electrónico
,Santiago,Vitacura,"Km 7,55 Eje Oriente-Poniente C. Norte",600-200-02-02,Cupón Electrónico/VOLTEX
,Santiago,Vitacura,"Km7,65, Eje Oriente-Poniente C. Norte",600-200-02-02,Cupón Electrónico/VOLTEX
,Santiago,Vitacura,Av. Las Condes Nº 10912,600-200-02-02,Cupón Electrónico
,Santiago ,Estación Central,Ecuador Nº 4603 Esq. Blanco Garces,600-200-02-02,Cupón Electrónico
,Santiago ,Estación Central,5 De Abril N° 4299 Esquina Placilla,600-200-02-02,Cupón Electrónico/TCT
,Santiago ,Estación Central,Padre Alberto Hurtado Nº 301,600-200-02-02,Cupón Electrónico/TCT
,Santiago ,Estación Central,5 De Abril Nº 4790,600-200-02-02,Cupón Electrónico
,Santiago ,Pedro Aguirre Cerda,Carlos Valdovinos Nº 2765,600-200-02-02,Cupón Electrónico
,Santiago ,Pedro Aguirre Cerda,Departamental Nº 1902 Esq.Ochagavia,600-200-02-02,Cupón Electrónico/TCT
,Santiago ,Pedro Aguirre Cerda,Isabel Riquelme Nº 2058,600-200-02-02,Cupón Electrónico
,Santiago ,Pedro Aguirre Cerda,Carlos Valdovinos Nº 2650,600-200-02-02,Cupón Electrónico
,Santiago ,Peñalolén,Av. Orientales Nº 5710,600-200-02-02,Cupón Electrónico/TCT/TAE/VOLTEX
,Santiago ,Peñalolén,Av. Departamental 7494,600-200-02-02,Cupón Electrónico
,Santiago ,Peñalolén,"El Valle Nº 5780, Esq. Av. A.Vespucio",600-200-02-02,Cupón Electrónico/TCT
,Santiago ,Peñalolén,Avda. Consistorial N° 2591,600-200-02-02,Cupón Electrónico
,Santiago ,Peñalolén,Av. Tobalaba Nº 11567,600-200-02-02,Cupón Electrónico
,Santiago ,San Ramón,Av. Americo Vespucio Nº 1316 -,600-200-02-02,Cupón Electrónico/TCT
,Cordillera,Pirque,Av. Virginia Subercaseaux Nº 1390,600-200-02-02,Cupón Electrónico
,Cordillera,Puente Alto,Avenida Gabriela N° 3950,600-200-02-02,Cupón Electrónico
,Cordillera,Puente Alto,Concha Y Toro Nº 0316,600-200-02-02,Cupón Electrónico/TCT
,Cordillera,Puente Alto,Av.Eyzaguirre N° 2436,600-200-02-02,Cupón Electrónico/TCT
,Cordillera,Puente Alto,Av. Concha Y Toro Nº 865,600-200-02-02,Cupón Electrónico
,Cordillera,Puente Alto,Concha Y Toro Nº 05,600-200-02-02,Cupón Electrónico
,Cordillera,Puente Alto,Sta. Rosa Nº 25,600-200-02-02,Cupón Electrónico
,Cordillera,Puente Alto,"Av. Mexico Nº 3193, Esq. El Penon",600-200-02-02,Cupón Electrónico
,Cordillera,Puente Alto,Av. Gabriela Nº 1482,600-200-02-02,Cupón Electrónico
,Cordillera,Puente Alto,Camilo Henriquez Nº 4583,600-200-02-02,Cupón Electrónico/VOLTEX
,Cordillera,Puente Alto,Av. Concha Y Toro Nº 3919,600-200-02-02,Cupón Electrónico/TCT/VOLTEX
,Cordillera,San José De Maipo,Comercio Nº 20173,600-200-02-02,Cupón Electrónico/TCT
,Chacabuco,Colina,Av. Chamisero N° 10.410,600-200-02-02,Cupón Electrónico/VOLTEX
,Chacabuco,Colina,Carretera San Martin Nº 401,600-200-02-02,Cupón Electrónico/TCT/TAE
,Chacabuco,Colina,Av. Chicureo N° 14.100 Esq. Av El Valle,600-200-02-02,Cupón Electrónico
,Chacabuco,Colina,Carretera General San Martín Antigua,600-200-02-02,Cupón Electrónico
,Chacabuco,Colina,"CHICUREO LOTE S/N 8, COSTADO SUR",600-200-02-02,Cupón Electrónico
,Chacabuco,Colina,Panamericana Norte Km 27 1/2 Colina,600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX/VOLTEX
,Chacabuco,Colina,"Carretera General San Martin Km 6,3",600-200-02-02,Cupón Electrónico
,Chacabuco,Lampa,Av Gral San Martin Esq. La Montana N° 2550,600-200-02-02,Cupón Electrónico
,Chacabuco,Lampa,Ruta G16 Sitio 122 Esq. Arco Iris,600-200-02-02,Cupón Electrónico/TCT/TAE
,Chacabuco,Lampa,Av. Espana N°2469,600-200-02-02,Cupón Electrónico
,Chacabuco,Lampa,Pedro Aguirre Cerda Nº 1370,600-200-02-02,Cupón Electrónico/TCT
,Chacabuco,Tiltil,Emilio Valle N°05 / Arturo Prat,600-200-02-02,Cupón Electrónico
,Maipo,Buin,"Balmaceda Nº 901, Esq. O'higgins",600-200-02-02,Cupón Electrónico/TCT
,Maipo,Buin,Panamericana Sur Nº 334,600-200-02-02,Cupón Electrónico
,Maipo,Calera De Tango,Camino Calera De Tango,600-200-02-02,Cupón Electrónico
,Maipo,Paine,Avda. Presidente Prieto 486 Lote A-1,600-200-02-02,Cupón Electrónico/TCT
,Maipo,Paine,Av.18 De Septiembre N°785,600-200-02-02,Cupón Electrónico
,Maipo,San Bernardo,Av. Jorge Alessandri Rodriguez 20011,600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX
,Maipo,San Bernardo,Camino Nos A Los Morros N°1275,600-200-02-02,Cupón Electrónico
,Maipo,San Bernardo,Camino Longitudinal Sur Km 27,600-200-02-02,Cupón Electrónico/TCT/TAE
,Maipo,San Bernardo,Camino Lo Sierra Nº 03000,600-200-02-02,Cupón Electrónico/TCT
,Maipo,San Bernardo,Freire Nº 45,600-200-02-02,Cupón Electrónico
,Maipo,San Bernardo,GENERAL VELASQUEZ N° 9301,600-200-02-02,Cupón Electrónico/TCT/BLUEMAX/VOLTEX
,Maipo,San Bernardo,EYZAGUIRRE N° 1658,600-200-02-02,Cupón Electrónico
,Maipo,San Bernardo,San Jose Nº 010 Esquina San Martin,600-200-02-02,Cupón Electrónico/TCT
,Melipilla,Curacaví,Ruta 68 Km 55,600-200-02-02,Cupón Electrónico/TCT
,Melipilla,Curacaví,AMBROSIO OHIGGINS 2173B,600-200-02-02,Cupón Electrónico
,Melipilla,María Pinto,Los Rulos Km 8,600-200-02-02,Cupón Electrónico
,Melipilla,Melipilla,"Las Casas Cruce La Virgen, Lote 1",600-200-02-02,Cupón Electrónico/TCT/TAE
,Melipilla,Melipilla,Av. Vicuna Mackena Nº 1041,600-200-02-02,Cupón Electrónico/TCT
,Melipilla,Melipilla,Av. Vicuna Mackenna Nº 820,600-200-02-02,Cupón Electrónico/TCT/TAE
,Melipilla,Melipilla,Huilco Bajo S/n,600-200-02-02,Cupón Electrónico/TCT/TAE
,Talagante,El Monte,Av. Libertadores Nº 98,600-200-02-02,Cupón Electrónico
,Talagante,Isla De Maipo,Santelices Nº 71,600-200-02-02,Cupón Electrónico/TCT
,Talagante,Padre Hurtado,Camino Melipilla Nº 1891,600-200-02-02,Cupón Electrónico/TCT
,Talagante,Padre Hurtado,Camino A Melipilla 1846,600-200-02-02,Cupón Electrónico
,Talagante,Talagante,"Ruta 78, Km 31 1/2, Poniente",600-200-02-02,Cupón Electrónico/TCT/BLUEMAX/VOLTEX
,Talagante,Talagante,"Ruta 78, Km 31 1/2, Oriente",600-200-02-02,Cupón Electrónico/TCT/BLUEMAX/VOLTEX
,Talagante,Talagante,Av. Bernardo O'higgins Nº 530,600-200-02-02,Cupón Electrónico/TCT
,Talagante,Talagante,"21 De Mayo Nº 1500, Trebulco",600-200-02-02,Cupón Electrónico/TCT
,Talagante ,Peñaflor,Balmaceda N°83,600-200-02-02,Cupón Electrónico/TCT
,Talagante ,Peñaflor,"Ruta 78, Km 25 1/2",600-200-02-02,Cupón Electrónico/TCT
,Talagante ,Peñaflor,Av. Vicuna Mackenna Nº 3957,600-200-02-02,Cupón Electrónico/TCT
,Región del Libertador General Bernardo O'Higgins (VI),,,,
,Cachapoal,Doñihue,Carretera H-30 Km. 25 Donihue,600-200-02-02,Cupón Electrónico/TCT
,Cachapoal,Graneros,Carretera Panamericana Sur S/n Km 75,600-200-02-02,Cupón Electrónico/TCT
,Cachapoal,Las Cabras,Las Acacias S/n,600-200-02-02,Cupón Electrónico/TCT
,Cachapoal,Las Cabras,"Ruta H-66, El Manzano, Lote A Sitio A Y 3",600-200-02-02,Cupón Electrónico/TCT
,Cachapoal,Machalí,Av. San Juan N ° 1151,600-200-02-02,Cupón Electrónico/TCT
,Cachapoal,Machalí,Abdon Yarra N° 991,600-200-02-02,Cupón Electrónico/TCT
,Cachapoal,Machalí,30 Km Al Noreste de Rancagua,600-200-02-02,Cupón Electrónico
,Cachapoal,Malloa,Bernales Nº 180,600-200-02-02,Cupón Electrónico/TCT
,Cachapoal,Mostazal,Sitio 4 Parcelacion Patria Nueva,600-200-02-02,Cupón Electrónico
,Cachapoal,Mostazal,"Panamericana Sur Km. 66,7",600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX/VOLTEX
,Cachapoal,Mostazal,"Panamericana Sur Km 67,1",600-200-02-02,Cupón Electrónico/TCT/BLUEMAX/VOLTEX
,Cachapoal,Olivar,Longitudinal Sur Km 90,600-200-02-02,Cupón Electrónico/TCT
,Cachapoal,Peumo,"Camino Pelequen, Sn. Antonio",600-200-02-02,Cupón Electrónico/TCT/TAE
,Cachapoal,Pichidegua,Ignacio Carrera Pinto S/n,600-200-02-02,Cupón Electrónico/TCT
,Cachapoal,Quinta De Tilcoco,"Argomedo S/N, Esq.Miguel Cuadra",600-200-02-02,Cupón Electrónico
,Cachapoal,Rancagua,Av. Miguel Ramirez Nº 1325,600-200-02-02,Cupón Electrónico
,Cachapoal,Rancagua,Av.Membrillar 490,600-200-02-02,Cupón Electrónico/TCT
,Cachapoal,Rancagua,Millan Nº 1023,600-200-02-02,Cupón Electrónico/TCT
,Cachapoal,Rancagua,Carretera El Cobre Nº 512,600-200-02-02,Cupón Electrónico/TCT
,Cachapoal,Rancagua,Libertador Bernardo O'Higgins 1915,600-200-02-02,Cupón Electrónico
,Cachapoal,Rancagua,"Alameda 790, Esq. San Martin",600-200-02-02,Cupón Electrónico/TCT/TAE
,Cachapoal,Rancagua,O'carrol Nº 1100,600-200-02-02,Cupón Electrónico
,Cachapoal,Rancagua,"Av. Miguel Ramirez Nº 199, La Compania",600-200-02-02,Cupón Electrónico/TCT
,Cachapoal,Rancagua,Cachapoal Nº 1420,600-200-02-02,Cupón Electrónico/TCT
,Cachapoal,Rancagua,Camino A Donihue Km 2,600-200-02-02,Cupón Electrónico/TCT
,Cachapoal,Rancagua,Av. Recreo Nº 238,600-200-02-02,Cupón Electrónico/TCT
,Cachapoal,Rengo,"Arturo Pratt 1313, Esq. Ladron De Guevara",600-200-02-02,Cupón Electrónico/TCT
,Cachapoal,Rengo,"San Martin S/N, M. Solis",600-200-02-02,Cupón Electrónico/TCT/TAE
,Cachapoal,Requínoa,Carretera Panamericana Sur Km. 95,600-200-02-02,Cupón Electrónico/TCT/BLUEMAX
,Cachapoal,Requínoa,Av. Leonardo Murialdo Nº 225,600-200-02-02,Cupón Electrónico/TCT
,Cachapoal,San Vicente,German Riesco Esq Diego Portales,600-200-02-02,Cupón Electrónico/TCT
,Colchagua,Chépica,18 De Septiembre Nº 3686,600-200-02-02,Cupón Electrónico/TCT
,Colchagua,Chimbarongo,Panamericana Sur Km 157,600-200-02-02,Cupón Electrónico/TCT/BLUEMAX/VOLTEX
,Colchagua,Lolol,Las Acacias Nº 215,600-200-02-02,Cupón Electrónico/TCT
,Colchagua,Nancagua,"Carretera I-50, Km 24, Nancagua",600-200-02-02,Cupón Electrónico/TCT
,Colchagua,Peralillo,Camino A Pichilemu Km 65,600-200-02-02,Cupón Electrónico/TCT/TAE
,Colchagua,San Fernando,"Panamericana Sur Km 126,8",600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX/VOLTEX
,Colchagua,San Fernando,Av. Bernardo O'higgins Nº 010,600-200-02-02,Cupón Electrónico
,Colchagua,San Fernando,Av. Bernardo O'higgins 0443,600-200-02-02,Cupón Electrónico
,Colchagua,San Fernando,Av. B. O'higgins Esq. M. Velasco,600-200-02-02,Cupón Electrónico/TCT/TAE
,Colchagua,San Fernando,Av. Manso De Velasco Nº 115,600-200-02-02,Cupón Electrónico
,Colchagua,Santa Cruz,Av. Errazuriz Nº 1236,600-200-02-02,Cupón Electrónico
,Colchagua,Santa Cruz,Av. Errazuriz Nº 1240,600-200-02-02,Cupón Electrónico
,Colchagua,Santa Cruz,Orlandi Nº 157,600-200-02-02,Cupón Electrónico/TCT
,Colchagua,Santa Cruz,Cruce Camino Pichilemu,600-200-02-02,Cupón Electrónico/TCT/TAE
,Cardenal Caro,Litueche,Cardenal Caro S/N Esq. Obispo Larraín 792,600-200-02-02,Cupón Electrónico/TCT
,Cardenal Caro,Navidad,Ignacio Carrera Pinto S/n,600-200-02-02,Cupón Electrónico
,Cardenal Caro,Pichilemu,Av. Ortuzar Nº 292,600-200-02-02,Cupón Electrónico
,Región del Maule (VII),,,,
,Talca,Constitución,"Av. Mac-Iver 790, Esq. Santa Maria",600-200-02-02,Cupón Electrónico/TCT/TAE
,Talca,Constitución,Camino A Constitucion Km 11,600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX
,Talca,Maule,Carretera Panamericana Sur Km 265,600-200-02-02,Cupón Electrónico/TCT/BLUEMAX/VOLTEX
,Talca,Río Claro,"Opazo Nº 36, Cumpeo",600-200-02-02,Cupón Electrónico
,Talca,San Clemente," Camino Internacional S/N, Km 46",600-200-02-02,Cupón Electrónico/TCT
,Talca,San Clemente,Huamachuco Nº 1261,600-200-02-02,Cupón Electrónico/TCT/TAE
,Talca,San Rafael,Ruta 5 Sur Km 237,600-200-02-02,Cupón Electrónico/TCT/BLUEMAX/VOLTEX
,Talca,Talca,Avda. Colin N°996,600-200-02-02,Cupón Electrónico
,Talca,Talca,Carretera Longitudinal Sur Km 255,600-200-02-02,Cupón Electrónico/TCT
,Talca,Talca,"2 Sur, Esq. 1 Oriente",600-200-02-02,Cupón Electrónico
,Talca,Talca,6 Oriente Nº 1274,600-200-02-02,Cupón Electrónico/TCT
,Talca,Talca,Uno Norte Nº 2315,600-200-02-02,Cupón Electrónico/TCT
,Talca,Talca,2 Norte N° 2310,600-200-02-02,Cupón Electrónico/VOLTEX
,Talca,Talca,12 Oriente Nº 836,600-200-02-02,Cupón Electrónico
,Talca,Talca,Av. Calle 5 Norte N° 3510,600-200-02-02,Cupón Electrónico
,Talca,Talca,Lircay N° 3070,600-200-02-02,Cupón Electrónico
,Talca,Talca,"Ruta 5 Sur Km 245, N°6005, Panguilemo",600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX
,Talca,Talca,Av. Carlos Schorr Nº 83,600-200-02-02,Cupón Electrónico/TCT
,Curico,Curicó,Av. Circunvalacion Norte N° 1265,600-200-02-02,Cupón Electrónico
,Curico,Curicó,Manso De Velasco Nº 215,600-200-02-02,Cupón Electrónico
,Curico,Curicó,"Longitudinal Sur Km 190, A.Negras",600-200-02-02,Cupón Electrónico/TCT
,Curico,Curicó,"Carmen Nº 890, C. Henriquez",600-200-02-02,Cupón Electrónico/TCT/TAE
,Curico,Curicó,Av. Freire Nº 681,600-200-02-02,Cupón Electrónico/TAE
,Curico,Hualañé,Av. Prat Nº 425,600-200-02-02,Cupón Electrónico/TCT
,Curico,Licantén,Av. Lautaro S/n,600-200-02-02,Cupón Electrónico/TCT
,Curico,Licantén,Camino Publico S/n,600-200-02-02,Cupón Electrónico
,Curico,Molina,Quechereguas N° 1616,600-200-02-02,Cupón Electrónico/TCT/TAE
,Curico,Molina,"Independencia S/N, Esq. L. C. Martinez",600-200-02-02,Cupón Electrónico/TCT
,Curico,Romeral,Camino Longitudinal Sur Km 187,600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX
,Curico,Sagrada Familia,"Ruta 5 Sur, Km 195,2",600-200-02-02,Cupón Electrónico/TCT/BLUEMAX
,Curico,Sagrada Familia,"Av. Esperanza S/N, San Luis",600-200-02-02,Cupón Electrónico
,Curico,Teno,"Av. Comalle Nº 196, Esq. Arturo Prat",600-200-02-02,Cupón Electrónico
,Linares,Colbún,AV. BERNARDO OHIGGINS ESQUINA LOS AROMOS,600-200-02-02,Cupón Electrónico
,Linares,Linares,Av. Leon Bustos Nº 1051,600-200-02-02,Cupón Electrónico/TCT/TAE
,Linares,Linares,"Kurt Moller, Esq. Chacabuco",600-200-02-02,Cupón Electrónico/TCT
,Linares,Linares,Av. Anibal Leon Bustos Nº 047,600-200-02-02,Cupón Electrónico
,Linares,Parral,Camino Panamericana Sur Km. 341,600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX/VOLTEX
,Linares,Parral,"Buin Nº 395, Esq. Dieciocho, Parral",600-200-02-02,Cupón Electrónico/TCT
,Linares,Retiro,"Acc. Principal, Esq. Vicuna Mackenna S/n",600-200-02-02,Cupón Electrónico
,Linares,San Javier,Chorrillos Nº 1398,600-200-02-02,Cupón Electrónico
,Linares,San Javier,"Carretera Longitudinal Sur Km 275,3",600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX/VOLTEX
,Linares,San Javier,"Balmaceda, Esq. Chorrillos",600-200-02-02,Cupón Electrónico/TCT/TAE
,Linares,Villa Alegre,Av. Abate Molina Nº 700,600-200-02-02,Cupón Electrónico
,Cauquenes,Cauquenes,"Maipu, San Martin",600-200-02-02,Cupón Electrónico/TCT/TAE
,Cauquenes,Cauquenes,Av. Luis Manríquez 2229,600-200-02-02,Cupón Electrónico/TCT/TAE
,Cauquenes,Pelluhue,Abdon Fuentealba Sn,600-200-02-02,Cupón Electrónico/TCT
,Región de Ñuble (XVI),,,,
,Diguillín,Bulnes,Sargento Aldea Nº 498,600-200-02-02,Cupón Electrónico/TCT
,Diguillín,Bulnes,"Prat, Esq. Errazuriz",600-200-02-02,Cupón Electrónico
,Diguillín,Chillán,Panamericana Norte Nº 0715,600-200-02-02,Cupón Electrónico/TCT
,Diguillín,Chillán,O' Higgins Nº 613,600-200-02-02,Cupón Electrónico/TCT/TAE
,Diguillín,Chillán,Av. Los Puelches Nº 363,600-200-02-02,Cupón Electrónico/TCT
,Diguillín,Chillán,Avda. Vicente Mendez Esq. Andres Bello,600-200-02-02,Cupón Electrónico/TCT
,Diguillín,Chillán,"Ecuador 147, Esq. O'higgins",600-200-02-02,Cupón Electrónico/TCT
,Diguillín,Chillán,Av. Collin Nº 1101,600-200-02-02,Cupón Electrónico
,Diguillín,Chillán,Av. Argentina N° 797,600-200-02-02,Cupón Electrónico
,Diguillín,Chillán Viejo,Longitudinal Sur 5 Km. 409,600-200-02-02,Cupón Electrónico/TCT/BLUEMAX/VOLTEX
,Diguillín,Chillán Viejo,"Ruta 5 Km 409,4",600-200-02-02,Cupón Electrónico/TCT/BLUEMAX/VOLTEX
,Diguillín,El Carmen,Entrada A Pueblo S/n,600-200-02-02,Cupón Electrónico/TCT/TAE
,Diguillín,Pemuco,"Colon, Esq. Miraflores",600-200-02-02,Cupón Electrónico/TCT/TAE
,Diguillín,Pinto,"J. J. Jarpa S/N, Sector Recinto",600-200-02-02,Cupón Electrónico
,Diguillín,Pinto,Camino Chillan A Pinto Km 24,600-200-02-02,Cupón Electrónico
,Diguillín,Quillón,Ruta N-48-O,600-200-02-02,Cupón Electrónico
,Diguillín,Yungay,Angeles Nº 667,600-200-02-02,Cupón Electrónico/TCT
,Itata,Cobquecura,Rehue N° 618,600-200-02-02,Cupón Electrónico
,Itata,Coelemu,"Castellon, Palazuelos",600-200-02-02,Cupón Electrónico/TCT/TAE
,Itata,Quirihue,Av. Prat Nº 850,600-200-02-02,Cupón Electrónico/TCT/TAE
,Punilla,Coihueco,"Prat, Esq. J. M. Carrera",600-200-02-02,Cupón Electrónico/TCT/TAE
,Punilla,San Carlos,"Ruta 5 Sur Km 383,3",600-200-02-02,Cupón Electrónico/TCT/BLUEMAX/VOLTEX
,Punilla,San Carlos,"Longitudinal Sur, Esq. Mackenna",600-200-02-02,Cupón Electrónico/TCT/TAE
,Punilla,San Carlos,Ernesto Riquelme 302,600-200-02-02,Cupón Electrónico
,Punilla,San Fabián,Avda. Los Andes 538,600-200-02-02,Cupón Electrónico
,Región del Biobío (VIII),,,,
,Concepción,Chiguayante,Calle 8 Oriente N° 750,600-200-02-02,Cupón Electrónico
,Concepción,Chiguayante,"O'higgins Nº 2160, Chiguayante.",600-200-02-02,Cupón Electrónico
,Concepción,Chiguayante,"Manuel Rodriguez Nº 725, Chiguayant",600-200-02-02,Cupón Electrónico/TCT
,Concepción,Coronel,"Sotomayor 1300, Esq. Valle Lota",600-200-02-02,Cupón Electrónico
,Concepción,Coronel,Juan Antonio Rios N° 2237,600-200-02-02,Cupón Electrónico/TCT
,Concepción,Coronel,"Los Carreras 176, Esq. Serrano",600-200-02-02,Cupón Electrónico/TCT
,Concepción,Florida,"General Lagos N° 666, (E. Ramirez S/N)",600-200-02-02,Cupón Electrónico/TCT
,Concepción,Lota,"Bannen, Esq. Serrano",600-200-02-02,Cupón Electrónico/TCT
,Concepción,Penco,"Cosmito, Parcela Nº 3, Lote 1, Camino A Penco",600-200-02-02,Cupón Electrónico/TCT
,Concepción,Penco,Calle Penco Nº 25,600-200-02-02,Cupón Electrónico
,Concepción,Penco,"Camilo Henriquez Nº 8, Lirquen",600-200-02-02,Cupón Electrónico
,Concepción,Penco,"Ruta 150, Km 3,75",600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX
,Concepción,San Pedro De La Paz,"Pedro Aguirre Cerda Nº 299, Esq. San Pedro",600-200-02-02,Cupón Electrónico
,Concepción,San Pedro De La Paz,Av. Michimalonco Nº 1300,600-200-02-02,Cupón Electrónico/TCT/VOLTEX
,Concepción,San Pedro De La Paz,"Camino Coronel A Concep.Nº 7171, Lomas Coloradas",600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX
,Concepción,Santa Juana,Lautaro Acceso Santa Juana 1262,600-200-02-02,Cupón Electrónico/TCT
,Concepción,Talcahuano,Valdivia Nº 60,600-200-02-02,Cupón Electrónico
,Concepción,Talcahuano,"Perez Gacitua 190, Esq. Benavente",600-200-02-02,Cupón Electrónico
,Concepción,Talcahuano,"Jorge Montt S/N, Base Naval",600-200-02-02,Cupón Electrónico
,Concepción,Talcahuano,Gran Bretana Nº 5475,600-200-02-02,Cupón Electrónico/TCT/TAE
,Concepción,Talcahuano,"Autopista Concepcion, Talcahuano N°7001",600-200-02-02,Cupón Electrónico/TCT
,Concepción,Talcahuano,"Americo Vespucio Nº 434, (Autopista)",600-200-02-02,Cupón Electrónico/TCT/TAE
,Concepción,Tomé,"Av. Daniel Vera 1322, Dichato",600-200-02-02,Cupón Electrónico
,Concepción,Tomé,Av. Latorre Nº 750,600-200-02-02,Cupón Electrónico/TCT
,Concepción ,Concepción,Paicavi N° 1248,600-200-02-02,Cupón Electrónico
,Concepción ,Concepción,Av. Pedro De Valdivia 1120 / La Mochita,600-200-02-02,Cupón Electrónico
,Concepción ,Concepción,"Prat Nº 289, San Martin",600-200-02-02,Cupón Electrónico/VOLTEX
,Concepción ,Concepción,"Prat, Esq. Rozas",600-200-02-02,Cupón Electrónico/TCT
,Concepción ,Concepción,Los Carreras Nº 801,600-200-02-02,Cupón Electrónico/TCT
,Concepción ,Concepción,Camino Bulnes 2845,600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX
,Concepción ,Concepción,21 De Mayo N°2750 Esq. Carlos Oliver,600-200-02-02,Cupón Electrónico
,Concepción ,Concepción,Ejercito N° 2001,600-200-02-02,Cupón Electrónico
,Concepción ,Concepción,Anibal Pinto Nº 1835,600-200-02-02,Cupón Electrónico
,Concepción ,Concepción,Maipu N°889,600-200-02-02,Cupón Electrónico
,Concepción ,Concepción,"Calle B-20 N° 420, Lomas De San Sebastian.",600-200-02-02,Cupón Electrónico
,Concepción ,Hualpén,Colon Nº 7601,600-200-02-02,Cupón Electrónico/TCT
,Concepción ,Hualpén,Autopista Concepcion-Talcahuano N°8360,600-200-02-02,Cupón Electrónico/TCT
,Arauco,Arauco,"Condell, Esq. Korner",600-200-02-02,Cupón Electrónico/TCT/TAE
,Arauco,Arauco,"Ruta 160 S/N Km 48,9",600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX
,Arauco,Cañete,Av. Presidente Frei Nº 1063,600-200-02-02,Cupón Electrónico/TCT/TAE
,Arauco,Contulmo,Ignacio Carrera Pinto N°315,600-200-02-02,Cupón Electrónico/TCT
,Arauco,Curanilahue,Av. O'higgins S/n,600-200-02-02,Cupón Electrónico/TCT/TAE
,Arauco,Lebu,"Andres Bello, Esq. J. A. Rios",600-200-02-02,Cupón Electrónico/TCT
,Arauco,Los Álamos,Av. Ignacio Carrera Pinto N° 24,600-200-02-02,Cupón Electrónico
,Arauco,Los Álamos,Av. Diego Portales Nº 1855,600-200-02-02,Cupón Electrónico/TCT/TAE
,Arauco,Tirúa,"Lote 6 B S/N, Sector Ponotro Tirua",600-200-02-02,Cupón Electrónico/TCT/TAE
,Bío- Bío,Cabrero,Salida Camino Cabrero A Concepcion,600-200-02-02,Cupón Electrónico/TCT
,Bío- Bío,Cabrero,"Ruta Q 50, Km 11 Desde Cabrero A Concepcion",600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX
,Bío- Bío,Laja,Av. Los Rios Nº 745,600-200-02-02,Cupón Electrónico/TCT/TAE
,Bío- Bío,Los Ángeles,Gabriela Mistral Nº 1625,600-200-02-02,Cupón Electrónico/TCT/TAE
,Bío- Bío,Los Ángeles,RUTA PANAMERICANA SUR KM. 506,600-200-02-02,Cupón Electrónico/TCT
,Bío- Bío,Los Ángeles,Km 18 Camino Antuco,600-200-02-02,Cupón Electrónico/TCT/TAE
,Bío- Bío,Los Ángeles,"Valdivia Nº 100, Av. Vicuna",600-200-02-02,Cupón Electrónico
,Bío- Bío,Los Ángeles,Avenida Alemania N° 1065,600-200-02-02,Cupón Electrónico
,Bío- Bío,Los Ángeles,Av. Vicuna Mackenna Nº 1241,600-200-02-02,Cupón Electrónico/TCT/TAE
,Bío- Bío,Los Ángeles,AVENIDA VICUÑA MACKENNA 130,600-200-02-02,Cupón Electrónico
,Bío- Bío,Los Ángeles,"Ruta 5 Sur Km 518,5",600-200-02-02,Cupón Electrónico/TCT/BLUEMAX/VOLTEX
,Bío- Bío,Los Ángeles,"Ruta 5 Sur Km 484, Salida Norte",600-200-02-02,Cupón Electrónico/TCT/BLUEMAX/VOLTEX
,Bío- Bío,Los Ángeles,Ercilla 799,600-200-02-02,Cupón Electrónico/TCT/TAE
,Bío- Bío,Los Ángeles,Almagro Nº 1190,600-200-02-02,Cupón Electrónico/TCT
,Bío- Bío,Mulchén,Lastarria N° 11,600-200-02-02,Cupón Electrónico/TCT/TAE
,Bío- Bío,Nacimiento,"Los Carrera, Esq. Lautaro",600-200-02-02,Cupón Electrónico/TCT/TAE
,Bío- Bío,Santa Bárbara,Prat Nº 942,600-200-02-02,Cupón Electrónico
,Bío- Bío,Tucapel,Lautaro N°313,600-200-02-02,Cupón Electrónico/TCT
,Bío- Bío,Yumbel,"Cruz, Esq. Las Heras",600-200-02-02,Cupón Electrónico
,Región de La Araucanía (IX),,,,
,Cautín,Carahue,Manuel Montt Nº 15,600-200-02-02,Cupón Electrónico/TCT/TAE
,Cautín,Cunco,Avenida Santa Maria N° 130,600-200-02-02,Cupón Electrónico
,Cautín,Cunco,Llaima Nº 792,600-200-02-02,Cupón Electrónico/TAE
,Cautín,Freire,Ruta 5 Sur Km 698,600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX/VOLTEX
,Cautín,Galvarino,"Matta, Esq. Maipu",600-200-02-02,Cupón Electrónico/TCT
,Cautín,Gorbea,O'higgins Nº 290,600-200-02-02,Cupón Electrónico/TCT
,Cautín,Lautaro,O'higgins N° 1174,600-200-02-02,Cupón Electrónico/TCT/TAE
,Cautín,Lautaro,"Ruta 5 Sur Km 645,7",600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX/VOLTEX
,Cautín,Loncoche,Balmaceda Nº 1121,600-200-02-02,Cupón Electrónico
,Cautín,Loncoche,Panamericana Sur Km 748,600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX/VOLTEX
,Cautín,Nueva Imperial,O'higgins Nº 498,600-200-02-02,Cupón Electrónico/TCT
,Cautín,Padre Las Casas,Av Huichahue 65,600-200-02-02,Cupón Electrónico
,Cautín,Perquenco,"Matta, Esq. Lastarria",600-200-02-02,Cupón Electrónico/TCT
,Cautín,Pitrufquén,"O'higgins Nº 680, Esq. Balmaceda",600-200-02-02,Cupón Electrónico/TCT
,Cautín,Pucón,"Fresia 547, Esq. Brasil",600-200-02-02,Cupón Electrónico
,Cautín,Pucón,Camino Internacional N°2215,600-200-02-02,Cupón Electrónico
,Cautín,Temuco,"Ruta 5 Sur S/N, Km 682",600-200-02-02,Cupón Electrónico/TCT/TAE
,Cautín,Temuco,Rudecindo Ortega 2011,600-200-02-02,Cupón Electrónico/TCT/TAE
,Cautín,Temuco,"Gral. Mackenna Nº 712, Esq. Varas",600-200-02-02,Cupón Electrónico
,Cautín,Temuco,Rudecindo Ortega Nº 1471,600-200-02-02,Cupón Electrónico/TCT
,Cautín,Temuco,Av. Caupolican Nº 0451,600-200-02-02,Cupón Electrónico/TCT/TAE
,Cautín,Temuco,Balmaceda Nº 1629,600-200-02-02,Cupón Electrónico/TCT
,Cautín,Temuco,Ruta S-30 Km 6.2 Camino A Labranza,600-200-02-02,Cupón Electrónico/TCT/TAE
,Cautín,Temuco,Av. Alemania Nº 83,600-200-02-02,Cupón Electrónico/VOLTEX
,Cautín,Temuco,"Av. San Martin, Esq. Uruguay",600-200-02-02,Cupón Electrónico
,Cautín,Vilcún,"Arturo Prat 520, Esq. Blanco Encalada",600-200-02-02,Cupón Electrónico/TCT/TAE
,Cautín,Villarrica,"Pedro De Valdivia Nº 302, Balmaceda",600-200-02-02,Cupón Electrónico/TAE
,Cautín,Villarrica,Geronimo De Alderete Nº 857,600-200-02-02,Cupón Electrónico/TCT
,Cautín,Villarrica,"Camino A Conaripe Nº 555, Lican-Ray",600-200-02-02,Cupón Electrónico
,Malleco,Angol,"Av. O'higgins, Av. Alemania",600-200-02-02,Cupón Electrónico/TCT/TAE
,Malleco,Angol,Colipi N° 171,600-200-02-02,Cupón Electrónico
,Malleco,Collipulli,"Freire, Esq. Amunategui",600-200-02-02,Cupón Electrónico/TCT/TAE
,Malleco,Collipulli,"M. Rodriguez, Camino Mininco-Esperanza",600-200-02-02,Cupón Electrónico/TCT/TAE
,Malleco,Curacautín,AVENIDA MANUEL RODRIGUEZ 1405,600-200-02-02,Cupón Electrónico/TCT/TAE
,Malleco,Lonquimay,PORTALES CON OHIGGINS 0,600-200-02-02,Cupón Electrónico/TCT
,Malleco,Los Sauces,Juan Trintre N°440 ,600-200-02-02,Cupón Electrónico/TCT
,Malleco,Lumaco,Caupolican N° 250,600-200-02-02,Cupón Electrónico/TCT
,Malleco,Purén,"Imperial Nº 895, Esq. Quiroga",600-200-02-02,Cupón Electrónico/TCT
,Malleco,Renaico,Granja Santa Carolina S/N (Ruta Nahuelbuta),600-200-02-02,Cupón Electrónico/TCT/BLUEMAX
,Malleco,Traiguén,"Coronel Urrutia 581, Esq. Riveros",600-200-02-02,Cupón Electrónico/TCT/TAE
,Malleco,Victoria,"Longitudinal Sur Km 614,2, Lado Oriente",600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX/VOLTEX
,Malleco,Victoria,Prat N° 1090,600-200-02-02,Cupón Electrónico/TCT
,Región de Los Ríos (XIV),,,,
,Valdivia,Lanco,Carretera Panamericana S/n Km 771,600-200-02-02,Cupón Electrónico/TCT/TAE
,Valdivia,Lanco,Prat s/n KM. 26.12 RUTA CH 203 0,600-200-02-02,Cupón Electrónico/TCT
,Valdivia,Los Lagos,Quinchilca S/n,600-200-02-02,Cupón Electrónico/TCT
,Valdivia,Los Lagos,"Balmaceda, Esq. San Martin",600-200-02-02,Cupón Electrónico/TCT/TAE
,Valdivia,Mariquina,Ruta 5 Km 786 San Jose De La Mariquina,600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX/VOLTEX
,Valdivia,Mariquina,José Puchi 1700,600-200-02-02,Cupón Electrónico
,Valdivia,Paillaco,Cochrane Nº 415,600-200-02-02,Cupón Electrónico/TCT/TAE
,Valdivia,Panguipulli,M. Rozas Nº 468,600-200-02-02,Cupón Electrónico/TCT
,Valdivia,Panguipulli,Guido Beck De Ramberga N°1484,600-200-02-02,Cupón Electrónico
,Valdivia,Valdivia,Avda. Pedro Aguirre Cerda N° 670,600-200-02-02,Cupón Electrónico/TCT
,Valdivia,Valdivia,"Picarte Nº 895, A. Munoz",600-200-02-02,Cupón Electrónico
,Valdivia,Valdivia,"Picarte 2261, Esq. Simpson",600-200-02-02,Cupón Electrónico/TCT/TAE/VOLTEX
,Valdivia,Valdivia,"Anibal Pinto N° 2007, Esq. Bulnes",600-200-02-02,Cupón Electrónico
,Valdivia ,Máfil,San Martin Nº 96,600-200-02-02,Cupón Electrónico/TCT
,Ranco,La Unión,Ruta 70 Km 4,600-200-02-02,Cupón Electrónico/TCT/TAE
,Ranco,La Unión,Comercio Nº 557,600-200-02-02,Cupón Electrónico
,Ranco,Río Bueno,"Comercio Nº 972, Esq. Av. Bdo. O'higgins",600-200-02-02,Cupón Electrónico
,Región de Los Lagos (X),,,,
,Llanquihue,Calbuco,Almirante La Torre 370 Sector San Rafael,600-200-02-02,Cupón Electrónico/TCT
,Llanquihue,Fresia,"Irarrazabal Nº 003, Esq. Bdo. O'higgins",600-200-02-02,Cupón Electrónico/TCT
,Llanquihue,Frutillar,Arturo Alessandri Nº 187,600-200-02-02,Cupón Electrónico/TCT/TAE
,Llanquihue,Llanquihue,Vicente Perez Rosales N° 711,600-200-02-02,Cupón Electrónico/TCT/TAE
,Llanquihue,Los Muermos,"M. Montt, Esq. Rodriguez",600-200-02-02,Cupón Electrónico/TCT
,Llanquihue,Maullín,Gaspar Del Rio Esq. 21 De Mayo,600-200-02-02,Cupón Electrónico
,Llanquihue,Puerto Montt,Av. Angelmo Nº 1920,600-200-02-02,Cupón Electrónico
,Llanquihue,Puerto Montt,Camino Alerce 2000 Esq. Avda 4ta,600-200-02-02,Cupón Electrónico/TCT
,Llanquihue,Puerto Montt,"Av. Los Notros, Volcan Puyehue",600-200-02-02,Cupón Electrónico
,Llanquihue,Puerto Montt,Av. Cardonal S/N Km 3,600-200-02-02,Cupón Electrónico/TCT
,Llanquihue,Puerto Montt,"San Martin, Esq. Benavente",600-200-02-02,Cupón Electrónico
,Llanquihue,Puerto Montt,Carretera Panamericana Nº 200,600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX/VOLTEX
,Llanquihue,Puerto Montt,"Gabriela Mistral N° 955, Sector Ale",600-200-02-02,Cupón Electrónico
,Llanquihue,Puerto Montt,Av. Marathon 1100,600-200-02-02,Cupón Electrónico
,Llanquihue,Puerto Montt,"Ruta 5 Sur KM 1038.5, Pargua",600-200-02-02,Cupón Electrónico/TCT/BLUEMAX/VOLTEX
,Llanquihue,Puerto Montt,AV AUSTRAL ESQ. AMANECER DE ALICAN,600-200-02-02,Cupón Electrónico
,Llanquihue,Puerto Montt,Av. Presidente Ibanez 1118,600-200-02-02,Cupón Electrónico/TCT/TAE
,Llanquihue,Puerto Varas,"Ruta 5 Sur Km 1009,4.",600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX/VOLTEX
,Llanquihue,Puerto Varas,Walker Martinez N° 315,600-200-02-02,Cupón Electrónico
,Llanquihue,Puerto Varas,"Santa Rosa 248, Esq. Martinez",600-200-02-02,Cupón Electrónico/TCT/TAE
,Llanquihue,Puerto Varas,Ensenada Km 48,600-200-02-02,Cupón Electrónico
,Osorno,Osorno,Eleuterio Ramirez Nº 211,600-200-02-02,Cupón Electrónico
,Osorno,Osorno,Av. Juan Mackenna N° 2019,600-200-02-02,Cupón Electrónico/TCT/TAE
,Osorno,Osorno,Bulnes Nº 544,600-200-02-02,Cupón Electrónico/TCT
,Osorno,Osorno,"Republica 840, Esq. Victoria",600-200-02-02,Cupón Electrónico
,Osorno,Osorno,"Los Carreras 1221, Esq. Av. Prat",600-200-02-02,Cupón Electrónico/TCT
,Osorno,Osorno,Rene Soriano Nº 2335,600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX/VOLTEX
,Osorno,Purranque,Eleuterio Ramirez 512,600-200-02-02,Cupón Electrónico/TCT
,Osorno,Puyehue,"RUTA 215 S/N, SECTOR ENTRE LAGOS",600-200-02-02,Cupón Electrónico
,Osorno,San Pablo,"Ruta 5 Sur Km. 904,3 Trafun.",600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX/VOLTEX
,Osorno,San Pablo,Ruta 5 Sur Km 906,600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX/VOLTEX
,Osorno ,Río Negro,"Av. Buschmann Nº 16, Balmaceda",600-200-02-02,Cupón Electrónico
,Chiloe,Ancud,Libertad Nº 547,600-200-02-02,Cupón Electrónico/TCT/TAE
,Chiloe,Castro,Galvarino Riveros N° 1205,600-200-02-02,Cupón Electrónico/TCT
,Chiloe,Castro,"O'higgins Nº 495, Sotomayor",600-200-02-02,Cupón Electrónico/TCT/TAE
,Chiloe,Castro,Panamericana Sur 1170,600-200-02-02,Cupón Electrónico/TCT/TAE/VOLTEX
,Chiloe,Chonchi,"Sargento Candelaria, Esq. Caupolican",600-200-02-02,Cupón Electrónico/TCT/TAE
,Chiloe,Dalcahue,Ramon Freire Poniente N° 595,600-200-02-02,Cupón Electrónico/TCT/TAE
,Chiloe,Quellón,"Ladrilleros, Esq. La Paz",600-200-02-02,Cupón Electrónico/TCT/TAE
,Palena,Chaitén,Av. Corcovado Nº 453,600-200-02-02,Cupón Electrónico/TCT/TAE
,Palena,Futaleufú,"Futaleufu, Carretera Austral Camino E Llimite S/n",600-200-02-02,Cupón Electrónico/TCT
,Palena,Hualaihué,Carretera Austral Km 107,600-200-02-02,Cupón Electrónico
,Palena,Palena,Hurtado De Mendoza S/n,600-200-02-02,Cupón Electrónico
,Región de Aysén del General Carlos Ibáñez del Campo (XI),,,,
,Coyhaique,Coyhaique,Balmaceda Nº 455,600-200-02-02,Cupón Electrónico/TAE
,Coyhaique,Coyhaique,Baquedano N°1578,600-200-02-02,Cupón Electrónico/TCT
,Coyhaique,Coyhaique,Av. Ogana N° 1157,600-200-02-02,Cupón Electrónico/TCT/VOLTEX
,Aysén,Aysén,Sargento Aldea N° 1902,600-200-02-02,Cupón Electrónico/TCT/TAE
,Aysén,Aysén,"Camino Acceso A, Puerto Chacabuco",600-200-02-02,Cupón Electrónico/TCT/TAE
,Aysén,Aysén,"Eusebio Ibar S/N, Manihuales",600-200-02-02,Cupón Electrónico/TCT
,Aysén,Cisnes,Piloto Pardo Esq. Condell,600-200-02-02,Cupón Electrónico/TAE
,Aysén,Cisnes,"Aysen S/N, Puyuhuapi",600-200-02-02,Cupón Electrónico
,Aysén,Cisnes,Ruta 7 Carretera Austral 1050,600-200-02-02,Cupón Electrónico
,Capitan Prat,Cochrane,Arturo Prat 275,600-200-02-02,Cupón Electrónico
,Capitan Prat,O'higgins,"Carretera Austral S/N°, Lote 26-a",600-200-02-02,Cupón Electrónico
,Capitan Prat,Tortel,Sector Rotonda. Manzana 38 - Lote 2,600-200-02-02,Cupón Electrónico
,General Carrera,Chile Chico,Las Magnolias 240,600-200-02-02,Cupón Electrónico/TCT
,General Carrera,Río Ibáñez,"Rio Tranquilo S/N, Carretera Austral.",600-200-02-02,Cupón Electrónico
,General Carrera,Río Ibáñez,Carretera Longitudinal Austral S/N Cerro Castillo,600-200-02-02,Cupón Electrónico/TCT
,Región de Magallanes y de la Antártica Chilena (XII),,,,
,Magallanes,Punta Arenas,Salvador Allende N° 0396,600-200-02-02,Cupón Electrónico
,Magallanes,Punta Arenas,"21 De Mayo 1401, Esq. Independencia",600-200-02-02,Cupón Electrónico
,Magallanes,Punta Arenas,"Av. Bulnes, Esq. Jose Gonzalez",600-200-02-02,Cupón Electrónico/TCT/TAE
,Magallanes,Punta Arenas,Av. Bulnes Nº 04486,600-200-02-02,Cupón Electrónico/TCT/TAE/BLUEMAX/VOLTEX
,Magallanes,Punta Arenas,"Diagonal Don Bosco, Esq. Sarmiento de Gamboa",600-200-02-02,Cupón Electrónico/TCT
,Ultima Esperanza,Natales,Bulnes Nº 239,600-200-02-02,Cupón Electrónico/TCT/TAE
,Tierra del Fuego,Porvenir,Santa Maria Nº 250,600-200-02-02,Cupón Electrónico/TCT/TAE
,Tierra del Fuego,Primavera,Ruta Ch-257 0,600-200-02-02,Cupón Electrónico/TCT
,Antártica Chilena,Cabo De Hornos,Avenida Costanera Nº 154,600-200-02-02,Cupón Electrónico
`;
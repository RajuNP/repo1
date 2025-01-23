import React, { useEffect, useRef, useState } from 'react';
import "./App.css"
const App = () => {
  
  
  return (
    <>
      <div className='outer-1'>
        <div className='dropdown'>
          <div className='dropdown-head'>
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAnwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAECB//EAD4QAAIBAgQDBQUHAgYCAwEAAAECAwQRAAUSIRMxQQYiUWFxFCMygZFCUqGxwdHwYuEHFSQzcvGSolOCshb/xAAaAQACAwEBAAAAAAAAAAAAAAADBAABAgUG/8QAJREAAgICAgEEAwEBAAAAAAAAAAECEQMhEjEEEyJBUTJCYXEU/9oADAMBAAIRAxEAPwDz1kWkVlVSzseZABCnnscMcscvS7AlVXvqLMT589uVsJswLSTa/iQkqm/h/wB4ZZTAEpZGeMksQqgGzE+R6cxhiPZY+oadVSNVUglLLcX0ePS2DEHLSQpBGx29cQ0qlKYak0tYat7/AM/vgix+6CQ2kgYMgiOTcMCBctytjUkyo/euD0uedh545ZZGZZY2W9yCL/D0/bEMKyVM3CkRlnAUr8Nl8beX9sRsg9yWQx11PO2peFIrjoBuOfoMN1zeLsv2bWsCRSZ1WOxGrfQoYr+Q+pxH2bymaaoWuqFCUUJZmZhfWVAv3fugnf0OKnnVXS1OdVJiJMUrNJEHN9/tAeR5j5+OFPInXRqEVOVGz2nzPMZXleqk1F9ZIa25BG3htt9fHAq5vVxOZmqJEOrSpBN2I6AdcAwAQx1AU3KnUCB9m/P5frjasKipADhAB8Q30RgC9vM4U5MZjhVFqpO2UNdSpS5qqNKgIEsznip6aQ1/Q4My+HK6+7x5rSpIDYRVCFS3nsTb5gYqCxwzD/TLwYQdKqvxynrv4Y4eZMvPDjm0y/8AxxAsfwxuGdoFLC1tFvqsqqKWd9ETsun4o7unpq5fLC2SKUy6SrIOZe1xzPLA+W9scyoSBxqt1+7M7kfni0UuZZF2ki0TXy+sbZWFmVyPEAk/Oww1DOvkE7XZWxMrXkB1KGKg2up6Y2wXaNAosL+GJs3yupy4SLNFcuwYahdSPLxv4jAEExlfh2K7d0ld2t1/EYYTsh1Jq2uLj+nEMrjQF2Vi3I4IkXSoYuDte2BaiBZge8pZSOvI9MRmQKekSddYYiSTckk7fLFfqKAwSMoOpg5VQvgLb4s88TQIqRh5CneCgjlaxuT64W1BIE7Tssaaho79z6AftjEkU0KamkkSbSIWVi1gq7kmx/DFnyvSaVGdru2523Fjbw8AMA1axOafiyurCS1rkE+f88cM6STSURFUq47ui/O/7WxEqZApY1jVg2sI3O1/zwSl9Icc225fjiBbKFZmTUOfgflghE4kRjDbkG7G23n6YI9I2iWnp9bolPAW4jWUKLtIf6R+v5Yt9BkkFMVjrZ4p6yQe7oaS2oDxdhyA6nYepxnZ3LKXLaKTOq+GSeYkpTU6g3I8AvibdeQHlhb2uzibJcmm1tozTM2tI4Ye6jv3Y1F+6tgQDyO55nC0530DbvonzztXl2SRyUNIqVUobvRRtanjPXcHUxvz+ePNs0zSXM5NU6xqBsiQoEVPQDAAYSHky78jjsRi9yPmTgD2WtHJZmK72YciOoPMY5hj4LtoJAKkFb8vT6YJVFsTv5AYiPcBMnda18VoJzl9mJLLEjBJN7EAkWtf+H647WskiXhRLwltuV5t5k+OBWmHO6C3IM342GOCxcBrset/H5dMVxRPUn9jCOqhCkSR1E79Tq0KMbSoAZZKd3je9xw6hTY+hOAbkKGCEgfFY2P0xswpKDYWt1K88VwS6L5t9l5yntgfZjlnaKmWtpm2B08OQX6jofW+J80y5Y6JajKJlraAmxcD3kW24dfHlv8Ahjz1JZIgY9BaMfdswHqOeHeTZzNQuKinkBQbN1FvBh1H8vgkJuJh/wAGfCaOxKsSQL2HTlt5DEblEY67ALvYL54NzcpLQpmGXd2OVtLxA3CSdBfwboenLCelJVRxdSOdTG4vfqefPDkZ8kUSTFWkTSwDX3tcgg9PwxxPTRyx6XBIbfUNsSVR1OI4rGy3BCm7eXK2IHklR1eVdKMLksdr2/DFkAq2gjrGYhm933VKpcgjn6/2xzlVSqyRwXLaQQb3BU38/l+GDf8ALhCBw3YnXrLDmfL0vgScQF5X2eWJSQijkb+HXGaoodwK0qkMpIIA1c73vgqgYy5jFRQxmScMsrQ23dBZrHwBuBc+OFdPVSS0ZMmuJioIdPz/AA5eWG1bmT0s6exyIPdR3lhIvILC12AvyA2vjGXLxRuMXJ0iy5xn9DlMPtWYM9ZWNEUpKK/+niQ9f6jyuT6DHlWcZhNmdW9SyxIXtqRF0oAPAdPlhxVSSV1O9JM2oAl6cnkrXuQfXfCN4mhIWdSpYXHgfT8cKKdknicCAyMrLHa7EXCltx88Y9c8UgjsbgEspkHLHaxKzMdGpdO9hcbYIoqSMqmpSAV1SSciR0A8BizNMg9rMjaI2CytbuK2pgPXpjaASyKQoZBuNXwj08TguZqeK6Romi24HLHMUUtS54YLX+gxT0Wk30RyyKRp3JxuCleYozDQha1xz2wdHQhU++5OwB6ft54YJRXVeK17fZTYDywKWVLocx+K3uQiFO8Ui7l1PIjx/n5HBEUa3ZhsCL2GGU2XL3pInbcW0HcAYAkjMRKbnSQG2OLjk5FZcHHaIGhjYajSSTH78RsVxCsaM3Fo5GMo5lls4P8AWOo8xgnhuJEMVTwW6XS4v688FOOL7uujEdQR7udDs/zxHKmSGNNBvZGdKmafKqghI6xCluiS80cfPCmvmnpBYLHFIxs9yTy2IN9hjuFpqPMYXIAmQgqw5NY4edo+GamplXu0zyLMRYc5FuR6XJwzgd6FckOMqE9FMlQP9wCR7qysvw+F7WvieuukaqVLFuoJvby+nLA1MkUtSGsEkddmbmdv74ZTw8MEJa46nkRhpdGTqaULqvYnkLb2wnkpGqZlmiBVTYyD4NR+mGVIQE0rbz7tiL/piY6IiSBdT0I3xb3sh29NJSrGFOtWgWUAjkGFwMJc/qDQaIZGKyRoFKnmF+yf/G2LnktOud5FkGYw3eNU9hrd/gMdypPqLj5jFK/xcYyZ6JNcQZVFKIowbgJ1PTmzD0thbJ7kXCbi9CZe0ioR7stY7G+DVz6kzGmSN10TwvqjU8t7Xsf0wXlcfZyShpaeCNFqUT/UTVIs8znnYcgo5AYH7U9m6aGgNXRqEkG9lOzDCMskFPg0dOPi5Z4fUTT/AIGURpSPdSLpFywJtcHwwRNTxeysigkKtrDa626Yq1Bl8tPS09ROLNUxmWK3MJrK3+ZU/LBbxzMrukhDkWBJ5nBnBiUc0a2htlgysrpCSvMLKyaLj1541WZ9l9OGhT7PxhF29P8ArCjs9m8cRkpswmYFiwJJ2GB48qjrq8qs49mHeUoL7fuTgbgr9wzjblSxLbGLdrqTfSj29Mbh7XU7tYhl25kYYUuT5LTR3nWnXzmbf8cL84pez80ZSCeFXtdXj/XAo5McpUosen43kQjcpxv6G+X5zHO3w6Ra4JOJqpBJNxE21jS3n4HHmtNPJST7NsDa55YtOXZu9QVXlEvNnNgfTBXip2hOHkxnGp9j0JaM8dBJBfcgd5D47dMZKoiUo51wNuN+f9Q8D5YjinkpasSjvwTCzqPvD+D1wbNTjgngENC4ut/sN+x6jA5NphIVLoW1YtGqTHUp3jkHXyOHrJ7VlEDMSW4YRw24YKdj9CPxwh2VZKea/Db6of7YMpKhlpeG8t0RwCB90g2P1t9fTDWB1IU8qPTFD1RgnWnGq8T32cgNv0t6n6YsMThkVmJA5G+5+eEuYTa6+nuyXv3Ao1bE/audt8N7VMEtIJYFWGrSSSNi51uFIGq1vh71h6YdTSdCd0CQrKrOXI0tLZW4Q746/liOorykRRVNylwSwsDywnlzQ+9RhqDLpDDbzBxPQT+1P3lvIgJuCLhf6b+nXxxTl8IhZv8ADqqzHKo69aSJpaSRAzR6Cw4gNlNhvvsTboDip9rY6hUBrZkqamok4vtB2NrbgjfSb/ZufHyx6zLDRZH2fg4FWkVUsImqIgCWdpLbeF9wN72G+PN5ctWrqGqKyR5pWa/fa9vAemFXKiKLk9FVoHkciExM0f3gw/uMZVPWUUscVJVvLxbhYgt9+QFuvyxa6r2SgisUBZhYIBe+Juz+e5Rln+VRx0PtFXMzVE0k0YBWYAiFVJ+wtyTbmcZVPsJc46TNZ7S+w1C0ry8RqWFIOGFtw9IsVO/r88AULQyytHUkIAt+eGqUUzg6laSRt2ZjfUfHAdVk1Kp1V1bFT9bMRjLmvs1HDO+iqZjlt55pKeWOSNW2sLXHniNKqqpodHfROpjO34Ys9TlUVKkVbR1cVRCGCPosbg7D6G2N1WSo51KrRt1C8sWpRaJwywdrX+Fbp6pHNzw9ZPU7n8cT11SrAIjopI5K1zf+eJwyXs9HICW/HAlV2dKMDGvzBxNFXkSoRMQr7OZdt26A4ZZWVSUWuLttYG3p/DjpcqkiOoRh16g3AH0wZTUqOQLmAjexNx+4xp9GI3Y1pahUqWhqG93MBqI5Rt0OGkVRJRyCCqHdJ7so+FvngGno5lgSpBEsjOzBTyYDukfMD62xxLmemIQU0chvskckdwfnfa3jheS5Ojo4pOG2GZrEptIhsw2IHNh++IKCeOJZA8sSkxEKXYAE81AHqB9cCpSSN73Mqj2eFBc8NuXlqOApc6oKYsuT0yu6/FO4/M8zgkFXQDyJc3b0PnXLMulOa5lTu6X1U1I50vVPba45qg3v422wLl2ZVmaZhW5zm84vUBUjH2VVeiDoovYYRUNLVZlXxyV8zO0yliCfhTw8rmwxY4n4MJVtEYB7qk2W3Txw3jt7YmVowyO9rd71FvriaiiqWqFhgRzKzBVRR3i17AYOpachhEsNnYgKCSxe5sABzx6bleT0XYrKGz7NYwcyItSU7WOhiD+PPfp5XxJNIoRf4j3ynM46moVnmmhj4qoLqjgKCAfnytilS5xV1Pu6cLTi4GoDUf26c8Me0dTLmtMautkMk8scmsk/aVtYPkLP/wCoxX3mekgE3CZoGJUg8+fxA/OxHpgFJ7NqTSoLkgDNzd2fnKWv8t8czUkcyBCSrK2pSOat4jAlTBVsqzVEMoh7vDQG4sy6h87b4njiq1UMvESMxLOp2KiM7AkeGKugkcbe72WbLMyqUoeBWx6XBKrMORvyt54Cq8hpJikkwa4G4vYufEnngelrpaYRGtg9yPhYd3cDe1/UYbQZjSTtwo3Icm3vRpJ9OhwvXF2h5LnGpAZpeHSNSpwoqd/ijhSxYeZNziOPMKqjkAqkFRTi1nRO8o8x4DDWQcPSjRlnZdo03I9TgZ5AJRH3QShaztfYWvf6jG07MSjODTTGVMaWrRWhkU33BBvfE7ZfqHdIOK41EkcpkppJYZ+eqJbj6G4xJHmOaZdFqmEMkY317gj5csDljl+rCrPGqnEZSZTIkgZTqHVSPywFWZclPG0zD/bBZWJ3uByxlH2mnmm4PBdn06rFbADxwHmeYPVwyEKQrsIkW97km3PEj6l7Kk8DjpDfLY/9LSQublKUavM3wjkzSLL4qh6jd9XcFhdrgEDFjpI9MbydFp0A+l8UyvyupzTMo0p1DWiBYsRpHMX/AAxMdNuy86lHHHj2CcKozqkrMwqXYCMhYUXYBvC3pjuGmSGiWNFDylivPmbb/TfFip/ZMupY8vo3E0kN5JZLWVLjdjhdmSoZ6BkQpIdbBAbnTa9z/OuDxlYjlxJVb2MckpWSKpknkvU6PhA2RVbkPH4lN/6vLEcp4jWbveOkb/n54YZU4FT31uTEGvbnzDf+t/mBhRnCTUdaxR7WJXUN9/HDWOXtASXFnpWU0uT9jjrjkjzDOOXEUe6g/wCPn5nf8sV3tJXz5u0tRVMzohuS32vIeX5/QBrPl6UCAZhMklRcARRi4v5/tfCDtHUwwUml2OpnACAXZvK2E/U5Ohr/AJXGHP4BqqmZuyjVV9J9skQuBuvugR8sRZZQw1eVvQ1TKYZvf08vJlfTZlI+W4+eDXDr2PpI5F/36mokIA8EVRv5YrUSVApONSE8UANptzIG3zH5XGNSTaoDBpStljoXpFokWpIJgo1DebWtb1uLehxz7VCnZueoXTxDRwU8SnkARpH5n6Yqc1ZUOlSKmEqJRdlYEcmvYbev1xxJVxy5fDC7FGgIt7ywYD4Rbx574G4X2MxlS0XespU9qlpmsVoT7SikfZKqb/8A6wBmeW0dRRx1EUKwmNal5FAse6dr+QJGBZe0qT1NdUJGziqpBToLfDYWufqcamzV6nLK1uBKKioBjjiSNjoBPeJNuthgcVNdjPOFEkgqMugAp5GMaUoZxLuWlsO6PD4hghKaPLYaV8wdfap1aTSeenooHXfElJWQHMIHbLquaGCFQqlCOI/2ib/LG3GY1uef5nU0cXd/2UlNuH4bAG4H64rlK6fRdJ7WyVngaASzypGoW51kLpI8sLpJ5anvUEBZBsskrFdf/Feo89sd0+Q01O7VVQvtVSxvcrZQfT98F6TAQ1g1VKbKCOXmfLBE0jOTHKWnoEhpY6cexw24zAGeTqq+v864BDrU51RRU6k01KeMfO3I/M4aVax01Oyj4L6pXv3pT1v/ADpjjs9RM8TVLKdVQbm4taMcvTa5/wDsMXJ1GwUY8siiuhwi6aC3PVGoP/iMUiohrmaOGjfhrwyJCNu7qa1jz649ElpmdEjiU20i30GIaPIS1W7aZCgTSBGpJUj0xjApdjXlKPBWynx5VU1FDHTwuyJJIEjRd2a53Nvr+GG0HZ2TL1kepjnNQ3cLzE3I6WxcKbsrnSM9RT0rCYwtHCG0pwydtW5/TFfzvs92h7LRtXQjhxOfg4gkBv0PS/gf+sNcG0cp5IRnfZFl9I9LW000ssECheITPIqjQANR8bbHp1wrzzN8sFTLHTNUVFOj3SSReABttubnl5b4QNXVGdVhSeoPFaUSEsoEha1rXsLADpsOuLZl3Y2POO9mEtRI3PTCNl+Z5/hjcYtLQGc03bJHraysn0RKIbjZ2Het6Df6nC6sp44CH3YgkmaQ3Zj4DD5kgoYWBYO/OQg/FitVrzVVcWlFtBtGg+yP3wnjafSOj5XOl6krY0avI7KpE8VmSoqNBZviXQu9vU/UYUSn2YiNBp2Fhyw1yjKmq8jqBIy6qqtMYcttDDEQ0jHw3sPphbPplqX0agt7DvXuOW+GWc81T1U+6hmbxJ2A/PE/tFdsVWKQeNhYjBFLT6ALLbywRwdVu7y5YE2hmEJ/APFW1Gi7wQhgPhVSf3w2oapWKcRLFhsCgtgRqYOANI1eNt8TpDIq+7J1r97z9cLZOJ08CaXuQ7sgW9gP+OFGYVoR+GoBsCdzbHNTJUiIK5C2ttsDb6nAFHTyVMjEgiJWIIAsWHz5+ZwLHBLbYVtr8TukSon/ANRUBS5J4SC4AHiRjmX3TsVYvPJ3CxP4LhgzcOUkaVUALckfy2NQ5XJIyqQVYnSNrlQeg8zhnGnIVzTUVV7EwoWzOr9kjDGFd52A6fdHri95D2enqItEEWpySZG5IvTTfyG1h4YedmuyHs0cUlUqww31NC63Z/DViz1PdiCU9RJEqC1kVbflhlYr7EZeT6aqHYqpezlBT+9rpjKQPhB0oP1/HDGGeGKFRl8CpEeWhNAI8Ryviv52hgZJaxxVw371PyEXgzAcwfA+OA6jPWSP3RDG1gE8MMwxX0c/Jnb3JjztB2mgyaieokBldRtEh3JPQHxx5L2r/wAU8xzGJ6XJqUU0LhlknqAJGI5EKOXXrfDDtPPPXUqLCkcsiyBykvIgfsd/liimlly90SolamDuXE6tsh69229+VuRxeXFKHwZx5Iz+TeUZBJKGraup4KouszFS7Nbfa3XbF2pO0y0lKslPXyMxADQyQlWG58Nj9cUc1GaZneMZpKYCd1iVYyR4HSAMNKHJXQ60Sz9X+0fmcYXNr29G5KP7Mm7NuaqOur6xixM4sp3Gy8h6XxEp77zybSOSQvhgvspSg5RDI7X1s7gdLlj/AGxHX0ro8oDcwdLedsJquVHRyxlwUn8j6KRqP/DmmaSIJJXPJwX2LcIyFyQRyDHTz32xW6CLiSg2vgmtnSTszkHCYGJKJY9jycHvg+B1X2xxlLqJNzuMEnpaAYEnNJjVYiDsDt0wVDBqPLAmpo5S+++9+m2GFPVkrzBt4DCE3I9FCMFqKOlp97WxOIdAAa/pjSzAqdwDtfzxFV1wSJjpJ2588LPlJ0adkdZJGsiQhNbfEb8gPE4jSTujhKp1HuAdfG/lgWwklMQBMsrAy3PIW5fpb1xcOzPZySvPtMpKwci9rXH3VH64bxYL0J5vIUFYqyjJJMwnhi4R4sx+3sqgcwfHbpj0CnyePJqVpaOJJ60bjiELfxC9BtgahqIUzmqNMyrBS06xRxAm1zdiT0v0x3V5qqkmS2q3oPljp48fwjhZ8zk7YRX5qvFMaAlidhgCVJZZOI0wWKMamF/iboPTmcVuoz5YpXSEcapkbSoG4v4AdTiRapuCsdRUB5vtAN16jB+DWkLKSask94tZx55Utc6gT8YPO+OcxmyNIQVCxF2teJjYbfPrhJnFdQwRuJWvNbuhNzfzPhipS5xMWYwdwEFSQL7fPlgjje7BWrqiyR1NPJXiiivKzMF4gHeVb7m3kLnDDPIcoaIRRUqIYzdJDucVvKM2joaGdIGVDKwYksb2tyty8cLpswqKp2K6nHS2L58tsix8dIKqn9muYdBt1AwB/mM97tJwweV+Z+WIJKliLObv5dMS0dHU1jglO6BtqOLc2uicUO+zx4fZ6iKgXMSkn1wPDI09dPxDcRfCOm+NYzHHj+TOzmb4xEGa0/s1O8tNLLEGbU0akaCTzNjy+WElFnlWlQqgRbuBfTvjMZg66FXotsVdKZJI2CsoUGxHrgrL6qR5NJsBpLbeuN4zAZpD2GUq7DZK2VYi3dJA6jAUlVKaeSpNjIoOm42GMxmMRirC5Mk67D+yFq2ugSZR7yYKxHOx/tiy9uc+zShzyqo8vq3pKbL6aN4o4QAGJBPe8eVrYzGYa6SOZkbfZ12ezCeqyxqyTSJZ5LtpFhfSB+mN14MiPI7sx35nGYzD2ASzlWoYUnzhjIDdUYKVYi1vC2HZgRw5uy22Gk2xmMxIt2yTSqJUO0MKwSARltzvc3wtRAZFXoQL4zGYjKOKGNf/AOgkpDcxcZVsSeqg4c5u/ssfDgVUXlsMbxmAx7Cy6FI93AJQLuWtc72wK9TMkjFZGBY2JvjMZiTeykf/2Q=="alt="image"className='image'/>
            
          </div> 
        </div>
      </div>
    </>
  );
};

export default App;
